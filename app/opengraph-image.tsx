import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = "Pepe Nero, pizzeria d'asporto e domicilio a Enna";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const latte = "#f7f5f1";
const tortora = "#b6a594";
const salvia = "#cbc7bb";

export default async function Image() {
  const anton = await readFile(join(process.cwd(), "assets/Anton-Regular.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#000",
          position: "relative",
          fontFamily: "Anton",
          color: latte,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -200,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -140,
            bottom: -260,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.04)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", position: "absolute", left: 90, top: 70 }}>
          <div style={{ display: "flex", position: "relative", width: 150, height: 120, marginLeft: 20 }}>
            <div style={{ position: "absolute", left: 20, top: 0, width: 70, height: 70, borderRadius: 9999, background: tortora }} />
            <div style={{ position: "absolute", left: 0, top: 58, width: 42, height: 42, borderRadius: 9999, background: salvia }} />
            <div style={{ position: "absolute", left: 38, top: 62, width: 50, height: 50, borderRadius: 9999, background: salvia }} />
          </div>

          <div style={{ display: "flex", fontSize: 200, lineHeight: 0.85, marginLeft: 118 }}>PEPE</div>

          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <svg width="100" height="190" viewBox="0 0 100 190" style={{ marginRight: 18, marginBottom: 4 }}>
              <path d="M50 4c5 6 7 11 7 16 0 5-3 8-7 8s-7-3-7-8c0-5 2-10 7-16z" fill={latte} />
              <rect x="47" y="30" width="6" height="6" rx="1" fill={latte} />
              <path d="M22 44c0-4 4-7 9-7h38c5 0 9 3 9 7v6c0 3-2 5-5 5H27c-3 0-5-2-5-5v-6z" fill={latte} />
              <path
                d="M33 56h34l3 8c7 5 16 14 16 30 0 20-13 33-22 38H36c-9-5-22-18-22-38 0-16 9-25 16-30l3-8z"
                fill={latte}
              />
              <rect x="6" y="136" width="88" height="17" rx="8.5" fill={latte} />
              <rect x="24" y="157" width="52" height="27" rx="1.5" fill={tortora} />
            </svg>
            <div style={{ display: "flex", fontSize: 200, lineHeight: 0.85, color: tortora, transform: "scaleX(-1)" }}>
              NERO
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", fontSize: 40, letterSpacing: 1 }}>PIZZERIA D&apos;ASPORTO E DOMICILIO</div>
          <div style={{ display: "flex", fontSize: 30, color: tortora, letterSpacing: 1 }}>
            {`${site.address.street.toUpperCase()}, ${site.address.city.toUpperCase()}`}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 34,
              color: "#000",
              background: tortora,
              borderRadius: 9999,
              padding: "10px 30px 14px",
            }}
          >
            {site.phone.display}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Anton", data: anton, style: "normal", weight: 400 }],
    },
  );
}
