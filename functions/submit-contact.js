export default {
    async fetch(request, env) {
        // Enable CORS
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
        }

        if (request.method !== "POST") {
            return new Response("Method Not Allowed", { status: 405 });
        }

        const ip = request.headers.get("CF-Connecting-IP") || "127.0.0.1";

        // 1. Honeypot Check (Handled in frontend but verified here if fields passed)
        // Note: This logic assumes JSON body
        let body;
        try {
            body = await request.json();
        } catch (e) {
            return new Response("Invalid JSON", { status: 400 });
        }

        if (body.url) {
            // Silent success for bots
            return new Response(JSON.stringify({ success: true }), { status: 200 });
        }

        // 2. Simple Rate Limiting (State is ephemeral in simple workers unless KV used)
        // In production, use KV. For this stub, we accept.

        // 3. Validation
        if (!body.email || !body.message || !body.name) {
            return new Response("Missing fields", { status: 400 });
        }

        // 4. Log/Forward (Stub)
        // Here you would use MailChannels (Free on CF) or SendGrid
        console.log(`[CONTACT FORM] From: ${body.email} | Msg: ${body.message}`);

        /*
        // Example MailChannels logic:
        let emailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                personalizations: [{ to: [{ email: env.CONTACT_FORWARD_EMAIL, name: "Researcher" }] }],
                from: { email: "no-reply@yourdomain.com", name: "Contact Form" },
                subject: "New Inquiry from " + body.name,
                content: [{ type: "text/plain", value: body.message + "\n\nFrom: " + body.email }]
            })
        });
        */

        return new Response(JSON.stringify({ success: true, message: "Received" }), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    },
};
