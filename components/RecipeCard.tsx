import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  category?: string;
}

export function RecipeCard({ id, title, image, category }: RecipeCardProps) {
  return (
    <Link href={`/recipe/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
          {category && (
            <p className="text-sm text-muted-foreground">{category}</p>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}