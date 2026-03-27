import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Josh Shuman - AE Solutions Hawaii'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a1628',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: '#c9a84c',
            letterSpacing: '0.3em',
            marginBottom: 20,
          }}
        >
          OAHU, HAWAII
        </div>
        <div
          style={{
            fontSize: 120,
            color: '#e8f4f8',
            fontWeight: 700,
            lineHeight: 0.9,
          }}
        >
          Josh
        </div>
        <div
          style={{
            fontSize: 120,
            color: '#e8c96d',
            fontWeight: 700,
            fontStyle: 'italic',
            lineHeight: 0.9,
          }}
        >
          Shuman
        </div>
        <div
          style={{
            fontSize: 20,
            color: '#a8c5d4',
            letterSpacing: '0.2em',
            marginTop: 30,
          }}
        >
          AE SOLUTIONS HAWAII
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
