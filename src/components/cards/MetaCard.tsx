import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface MeatCardProps {
  name: string
  description: string
  image: string
}

export const MeatCard = ({ name, description, image }: MeatCardProps) => (
  <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="text-2xl text-orange-700">{name}</CardTitle>
      <CardDescription className="text-lg text-orange-600">{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex justify-center p-6">
      <img src={image} alt={name} className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
    </CardContent>
  </Card>
)