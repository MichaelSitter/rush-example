import path from 'path'
import fs from 'fs/promises'

export async function writeCustomTelemetry(name: string, data: any) {
  const date = new Date()
  const datetime = `${date.getFullYear()}_${
    date.getMonth() + 1
  }_${date.getDate()}_${date.getHours()}_${date.getMinutes()}`
  const filePath = path.join('common', 'temp', 'telemetry', `${name}_${datetime}.json`)
  await fs.writeFile(filePath, JSON.stringify(data))
}
