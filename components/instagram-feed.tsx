'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react'

const instagramPosts = [
    {
        id: 1,
        imageUrl: "/paella.jpg",
        likes: 1234,
        comments: 56,
        caption: "Deliciosa paella valenciana recién hecha. ¡Un clásico de nuestra cocina! 🥘 #Paella #ComidaEspañola",
    },
    {
        id: 2,
        imageUrl: "/chef.jpg",
        likes: 2345,
        comments: 78,
        caption: "Nuestro chef preparando un exquisito postre. La magia sucede en la cocina. 👨‍🍳✨ #ChefEnAcción #Repostería",
    },
    {
        id: 3,
        imageUrl: "/gazpacho.jpg",
        likes: 3456,
        comments: 90,
        caption: "Nueva adición a nuestro menú: Gazpacho andaluz. Refrescante y lleno de sabor. 🥣🍅 #Gazpacho #CocinaAndaluza",
    },
]

export default function InstagramFeed() {
    const [likedPosts, setLikedPosts] = useState<number[]>([])
    const [savedPosts, setSavedPosts] = useState<number[]>([])

    const handleLike = (postId: number) => {
        setLikedPosts(prev =>
            prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
        )
    }

    const handleSave = (postId: number) => {
        setSavedPosts(prev =>
            prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
        )
    }

    return (
        <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Síguenos en Instagram</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {instagramPosts.map((post) => (
                        <Card key={post.id} className="overflow-hidden">
                            <img src={post.imageUrl} alt="Instagram post" className="w-full h-64 object-cover" />
                            <CardContent className="p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex space-x-4">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleLike(post.id)}
                                            className={likedPosts.includes(post.id) ? "text-red-500" : ""}
                                        >
                                            <Heart className="h-6 w-6" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <MessageCircle className="h-6 w-6" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Send className="h-6 w-6" />
                                        </Button>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleSave(post.id)}
                                        className={savedPosts.includes(post.id) ? "text-yellow-500" : ""}
                                    >
                                        <Bookmark className="h-6 w-6" />
                                    </Button>
                                </div>
                                <p className="font-semibold">{post.likes.toLocaleString()} likes</p>
                                <p className="text-sm text-gray-600 mt-1">{post.caption}</p>
                                <p className="text-sm text-gray-500 mt-1">View all {post.comments} comments</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Button variant="outline" size="lg">
                        Ver más en Instagram
                    </Button>
                </div>
            </div>
        </section>
    )
}