import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const convertToWebp = async () => {
  try {
    // 定義來源和目標目錄
    const sourceDir = join(__dirname, 'public', 'images')
    const targetDir = join(__dirname, 'public', 'images-webp')

    // 遞迴取得所有子目錄
    const getDirectories = async dir => {
      const items = await fs.readdir(dir, { withFileTypes: true })
      const dirs = items.filter(item => item.isDirectory()).map(item => join(dir, item.name))

      const subDirs = await Promise.all(dirs.map(d => getDirectories(d)))

      return [dir, ...subDirs.flat()]
    }

    // 獲取所有目錄
    const directories = await getDirectories(sourceDir)

    // 為每個目錄創建對應的輸出目錄
    for (const dir of directories) {
      const relativePath = dir.replace(sourceDir, '')
      const outputDir = join(targetDir, relativePath)
      await fs.mkdir(outputDir, { recursive: true })
    }

    // 處理每個目錄中的圖片
    for (const dir of directories) {
      const relativePath = dir.replace(sourceDir, '')
      const outputDir = join(targetDir, relativePath)

      const files = await imagemin([`${dir}/*.{jpg,jpeg,png,JPG,JPEG,PNG}`], {
        destination: outputDir,
        plugins: [
          imageminWebp({
            quality: 80, // 設置壓縮質量
            method: 6, // 設置壓縮方法（0-6）,6為最佳壓縮
          }),
        ],
      })

      console.log(`Converted ${files.length} images in ${dir}`)
    }

    console.log('All images have been converted to WebP format!')
  } catch (error) {
    console.error('Error converting images:', error)
  }
}

convertToWebp()
