import{_ as r}from"./BV5rNh8P.js";import{r as f,A as m,o as c,c as d,a as s,b as o,w as l,d as i}from"./lv8fD2P0.js";const g="data:image/svg+xml,%3csvg%20width='47'%20height='22'%20viewBox='0%200%2047%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.951425%201.3226C0.951425%201.3226%207.59374%207.88476%2021.7829%2010.3136C36.6164%2012.8527%2046.0056%2020.7682%2046.0056%2020.7682'%20stroke='white'/%3e%3cpath%20d='M0.994498%2020.7333C0.994498%2020.7333%2011.9177%2019.7141%2021.826%2011.7423C32.1842%203.4086%2046.0487%201.28769%2046.0487%201.28769'%20stroke='white'/%3e%3c/svg%3e",u={class:"absolute top-12 right-10"},v={class:"flex flex-col items-end p-12 text-white"},w={class:"flex flex-col items-end space-y-12 sm:space-y-20 w-full"},k={class:"flex justify-between w-full items-center"},h={class:"flex flex-col items-start space-y-6 w-1/2 ml-8"},y={class:"flex justify-between w-full items-center"},_={class:"flex flex-col items-start space-y-6 w-1/2 ml-8"},b={class:"flex justify-between w-full items-center"},C={class:"flex flex-col items-start space-y-6 w-1/2 ml-8"},S={__name:"SideMenu",setup(N,{expose:p}){const n=f(null),{$gsap:x}=m();return p({show:()=>{x.to(n.value,{x:0,duration:.5,ease:"power2.out"})},hide:()=>{x.to(n.value,{x:"100%",duration:.5,ease:"power2.in"})}}),(a,t)=>{const e=r;return c(),d("div",{class:"fixed top-0 right-0 h-full w-full sm:w-[710px] bg-black/90 transform translate-x-full z-30 flex flex-col justify-center",ref_key:"menuRef",ref:n},[s("div",u,[s("div",{class:"cursor-pointer w-8 sm:w-10",onClick:t[0]||(t[0]=M=>a.$emit("close"))},t[1]||(t[1]=[s("img",{src:g},null,-1)]))]),s("div",v,[s("nav",w,[s("div",k,[t[4]||(t[4]=s("div",{class:"flex flex-col items-center w-1/2 ml-1"},[s("p",{class:"font-shippori text-[22px] sm:text-[24px] tracking-[8px] sm:tracking-[12px]"}," 由島至島 "),s("p",{class:"font-amiri italic text-[13px] sm:text-[17px] tracking-[3px] sm:tracking-[4px] mt-2"}," FILM ")],-1)),s("div",h,[o(e,{to:"/film",class:"font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light hover:opacity-50"},{default:l(()=>t[2]||(t[2]=[i("電影介紹")])),_:1}),o(e,{to:"/reports",class:"font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light hover:opacity-50"},{default:l(()=>t[3]||(t[3]=[i("座談與報導")])),_:1})])]),s("div",y,[t[11]||(t[11]=s("div",{class:"flex flex-col items-center w-1/2 ml-1"},[s("p",{class:"font-shippori text-[22px] sm:text-[24px] tracking-[8px] sm:tracking-[12px]"}," 主題教案 "),s("p",{class:"font-amiri italic text-[13px] sm:text-[17px] tracking-[3px] sm:tracking-[4px] mt-2"}," LESSON ")],-1)),s("div",_,[o(e,{to:"/lesson",class:"font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light hover:opacity-50"},{default:l(()=>t[5]||(t[5]=[i("教案介紹")])),_:1}),o(e,{to:"/lesson/one",class:"font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light hover:opacity-50"},{default:l(()=>t[6]||(t[6]=[i("移動與邊界")])),_:1}),o(e,{to:"/lesson/two",class:"font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light hover:opacity-50"},{default:l(()=>t[7]||(t[7]=[i("加害與被害")])),_:1}),o(e,{to:"/lesson/three",class:"font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light hover:opacity-50"},{default:l(()=>t[8]||(t[8]=[i("共犯結構")])),_:1}),o(e,{to:"/lesson/four",class:"font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light hover:opacity-50"},{default:l(()=>t[9]||(t[9]=[i("克服過去")])),_:1}),o(e,{to:"/lesson/five",class:"font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light hover:opacity-50"},{default:l(()=>t[10]||(t[10]=[i("為什麼要記憶")])),_:1})])]),s("div",b,[t[15]||(t[15]=s("div",{class:"flex flex-col items-center w-1/2 ml-1"},[s("p",{class:"font-shippori text-[22px] sm:text-[24px] tracking-[8px] sm:tracking-[12px]"}," 聯絡資訊 "),s("p",{class:"font-amiri italic text-[13px] sm:text-[17px] tracking-[3px] sm:tracking-[4px] mt-2"}," CONTACT ")],-1)),s("div",C,[o(e,{to:"/educational",class:"font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light hover:opacity-50"},{default:l(()=>t[12]||(t[12]=[i("教育公播")])),_:1}),o(e,{to:"/booking",class:"font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light hover:opacity-50"},{default:l(()=>t[13]||(t[13]=[i("包場資訊")])),_:1}),o(e,{to:"/contact",class:"font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light hover:opacity-50"},{default:l(()=>t[14]||(t[14]=[i("聯絡我們")])),_:1})])])])])],512)}}};export{S as _};
