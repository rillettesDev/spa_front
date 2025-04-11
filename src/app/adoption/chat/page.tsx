
import AnimalCard from "../../components/AnimalCard"

const chats = [
  {
    name: "Azraël",
    image: "/animals/chats/azrael.jpg",
    description: "Toujours en quête de tranquillité, mais adore les câlins discrets.",
    age: 4,
  },
  {
    name: "Sylvestre",
    image: "/animals/chats/sylvestre.jpg",
    description: "Fonceur et curieux, toujours sur la piste de nouvelles aventures.",
    age: 3,
  },
  {
    name: "Le Chat Potté",
    image: "/animals/chats/lechatpotte.jpg",
    description: "Charmeur et rusé, difficile de lui dire non avec ses grands yeux.",
    age: 2,
  },
  {
    name: "Garfield",
    image: "/animals/chats/garfield.jpg",
    description: "Gros dormeur, grand mangeur, parfait compagnon de canapé.",
    age: 6,
  },
]

export default function PageChats() {
  return (
    <main className="page-container">
      <h1 className="page-title">Adoption - Chats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {chats.map((chat) => (
          <AnimalCard key={chat.name} {...chat} />
        ))}
      </div>
    </main>
  )
}
