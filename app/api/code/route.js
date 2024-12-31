import { NextResponse } from "next/server";

export async function POST(req) {
  const { code, language } = await req.json();

  const clientId = "afe82c00a0adeaaea5e8c6a155322dd6";
  const clientSecret =
    "bd7f0261ecc05fb362c026781ff3eaf286d61c92df2522a389a318aa750163c4";

  try {
    // const authResponse = await fetch("https://api.jdoodle.com/v1/auth-token", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     clientId,
    //     clientSecret,
    //   }),
    // });

    // if (!authResponse.ok) {
    //   const errorText = await authResponse.text();
    //   console.error(
    //     "Authentication failed with status",
    //     authResponse.status,
    //     errorText
    //   );
    //   return NextResponse.json(
    //     { error: "Failed to authenticate with JDoodle" },
    //     { status: 500 }
    //   );
    // }

    // const authText = await authResponse.text();
    // console.log("Auth Response Text:", authText);

    // const accessToken = authText;

    // if (!accessToken) {
    //   console.error("Authentication failed: No access token received.");
    //   return NextResponse.json(
    //     { error: "Failed to authenticate with JDoodle" },
    //     { status: 500 }
    //   );
    // }

    const executeResponse = await fetch("https://api.jdoodle.com/v1/execute", {
      method: "POST",
      headers: {
        // Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientId,
        clientSecret,
        script: code,
        stdin: "",
        language,
        versionIndex: "3",

        compileOnly: false,
      }),
    });

    const executeText = await executeResponse.text();
    console.log("Execute Response Text:", executeText);

    try {
      const executeData = JSON.parse(executeText);

      if (executeData.output) {
        return NextResponse.json(
          { output: executeData.output },
          { status: 200 }
        );
      } else {
        console.error("Execution failed: No output received.");
        return NextResponse.json(
          { error: "Error executing the code" },
          { status: 500 }
        );
      }
    } catch (parseError) {
      console.error("Failed to parse execute response as JSON:", parseError);
      return NextResponse.json(
        { error: "Failed to parse the response from JDoodle" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
