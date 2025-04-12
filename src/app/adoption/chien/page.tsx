import AnimalCard from "../../components/AnimalCard"

const chiens = [
  {
    name: "Rantanplan",
    image: "/animals/chiens/rantanplan.png",
    description: "Gentil mais distrait, il vous fera rire tous les jours.",
    age: 5,
  },
  {
    name: "Idéfix",
    image: "/animals/chiens/idefix.png",
    description: "Protecteur des arbres et fidèle comme personne.",
    age: 3,
  },
  {
    name: "Scooby-Doo",
    image: "/animals/chiens/scoobydoo.png",
    description: "Un peu peureux mais toujours prêt à se surpasser pour les biscuits.",
    age: 4,
  },
  {
    name: "Pluto",
    image: "/animals/chiens/pluto.png",
    description: "Le meilleur des amis, joueur et très affectueux.",
    age: 6,
  },
]

export default function PageChiens() {
  return (
    <main className="page-container">
      <h1 className="page-title">Adoption - Chiens</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {chiens.map((chien) => (
          <AnimalCard key={chien.name} {...chien} />
        ))}
      </div>
    </main>
  )
}
