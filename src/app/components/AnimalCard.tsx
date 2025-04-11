import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

interface AnimalCardProps {
  name: string
  image: string
  description: string
  age?: number
}

export default function AnimalCard({ name, image, description, age }: AnimalCardProps) {
  return (
    <Card className="w-full max-w-sm shadow-lg rounded-2xl overflow-hidden">
      <CardHeader>
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className="object-cover w-full h-64 rounded-t-2xl"
        />
        <CardTitle className="text-2xl text-orange-400 mt-4">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        {age !== undefined && <p className="text-sm font-semibold">Âge : {age} ans</p>}
      </CardContent>
    </Card>
  )
}