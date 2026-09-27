import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const alt = "Donna Carmela, antica gelateria alla Kalsa, Palermo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function Image() {
  const font = await readFile(join(process.cwd(), "assets/Anton-Regular.ttf"));
  return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",padding:70,background:"#242b1c",color:"#faf8ec",fontFamily:"Anton"}}>
    <div style={{fontSize:30,display:"flex",marginBottom:30}}>ANTICA GELATERIA · PALERMO</div>
    <div style={{fontSize:140,display:"flex",lineHeight:1}}>DONNA CARMELA</div>
    <div style={{fontSize:45,display:"flex",color:"#bac78a",marginTop:40}}>GELATO, GRANITE E BRIOCHE ALLA KALSA.</div>
    <div style={{fontSize:26,display:"flex",marginTop:30}}>Via Alessandro Paternostro, 20</div>
  </div>, {...size,fonts:[{name:"Anton",data:font,weight:400,style:"normal"}]});
}
