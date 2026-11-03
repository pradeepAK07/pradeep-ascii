import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#131518",
          color: "#c6f24e",
          fontSize: 22,
          fontWeight: 700,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          border: "1px dashed #3a3d42",
          borderRadius: 4,
        }}
      >
        P
      </div>
    ),
    { ...size }
  );
}
