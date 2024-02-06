import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";


export async function GET(request: NextRequest) {

    return new ImageResponse((
        <div
            style={{
                display: "flex", // Use flex layout
                flexDirection: "row", // Align items horizontally
                alignItems: "stretch", // Stretch items to fill the container height
                width: "100%",
                height: "100vh", // Full viewport height
                backgroundColor: "white",
            }}
        >
            <h1>Answer</h1>
            <p>Answer to the Ultimate Question of Life, the Universe, and Everything</p>
            <img
                style={{
                    height: "100%", // Make image full height
                    objectFit: "cover", // Cover the area without losing aspect ratio
                    width: "35%", // Image takes up 40% of the container's width
                }}
                src="https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/2639523a-690b-47af-16ab-ca07697fd000/original"
            />
        </div>
    ));
}