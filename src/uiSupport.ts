export function renderHtml(contents: string[]): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <title>AI Agent Contract Demo UI</title>
        </head>
        <body>
            <div align="center">
                <p>"Allora AI Agent Contract hosted on <a href="https://github.com/Phala-Network/ai-agent-template-allora">Phala Network</a>, an AI Coprocessor for hosting AI Agents."</p>
                <img src="https://i.imgur.com/8B3igON.png" width="600" alt="AI Agent Contract" />
                <p>BTC Price Prediction in 10 mins: $${contents[0]}</p>
                <p>BTC Price Prediction in 24 hours: $${contents[1]}</p>
            </div>
        </body>
    </html>`
}
