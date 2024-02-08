import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "next/og";
import { FlockFrameType } from "@/app/types";
import chatFlock from "@/app/util/flock-api";


export async function GET(req: NextRequest) {

    const inputText = req.nextUrl.searchParams.get("text");
    const buttonIndex = req.nextUrl.searchParams.get("buttonIndex");
    console.log("Button Index:", buttonIndex);
    console.log("Input Text:", inputText);


    const indexMapping: Map<FlockFrameType, [string, string]> = new Map([
        [FlockFrameType.Bitcoin, ["bitcoin", process.env.NEXT_PUBLIC_MODEL_NAME_BITCOIN || ""]],
        [FlockFrameType.Ethereum, ["ethereum", process.env.NEXT_PUBLIC_MODEL_NAME_ETHEREUM || ""]],
        [FlockFrameType.scroll, ["scroll", process.env.NEXT_PUBLIC_MODEL_NAME_SCROLL || ""]],
    ]);


    // @ts-ignore
    const resposneMapping = indexMapping.get(parseInt(buttonIndex));
    console.log("Response Mapping:", resposneMapping);
    if (!resposneMapping)
        return new NextResponse("Invalid button index", { status: 400 });
    const [modelName, app_id] = resposneMapping;

    console.log("Input Text:", inputText);

    // @ts-ignore
    const response = await chatFlock(inputText, app_id);

    console.log("Response:", response);

    return new ImageResponse((
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "70%",
                margin: "0 auto",
                height: "100vh",
                backgroundColor: "white",
            }}
        >
            <h1
                style={{
                    fontSize: "2em", // Set font size to 2em
                    color: "black", // Set text color to black
                    fontWeight: "bold", // Set font weight to bold
                }}>Answer</h1>
            <p style={{
                color: "black", // Set text color to black

            }}>Here is the model you called {modelName}</p>
            <div
                style={{
                    display: "flex", // Use flex layout
                    flexDirection: "row", // Align items vertically
                    alignItems: "center", // Center items horizontally
                    justifyContent: "center", // Center items vertically
                    gap: "10px", // Add 10px gap between items
                }}
            >
                <h2>Your Question:</h2>
                <p
                    style={{
                        fontSize: "1em", // Set font size to 1.5em
                        color: "black", // Set text color to black
                    }}>{inputText}</p>
            </div>

            <h3>Answer:</h3>
            <p
                style={{
                    fontSize: "1.5em", // Set font size to 1.5em
                    color: "black", // Set text color to black
                    padding: "10px", // Add padding around the text
                }}>
                {response.answer}
            </p>
        </div>
    ));
}