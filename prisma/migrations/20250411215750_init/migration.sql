-- CreateTable
CREATE TABLE "Adoptant" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "cp" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "historiqueAdoption" TEXT NOT NULL,
    "commentaires" TEXT NOT NULL,

    CONSTRAINT "Adoptant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adoption" (
    "id" SERIAL NOT NULL,
    "dateAdoption" TIMESTAMP(3) NOT NULL,
    "typeAdoption" TEXT NOT NULL,
    "id_animal" INTEGER NOT NULL,
    "id_adoptant" INTEGER NOT NULL,

    CONSTRAINT "Adoption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "sexe" TEXT NOT NULL,
    "espece" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "N_identification" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "statut" TEXT NOT NULL,
    "dateArrivee" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evolution" (
    "id" SERIAL NOT NULL,
    "id_animal" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "motif" TEXT NOT NULL,
    "observations" TEXT NOT NULL,

    CONSTRAINT "Evolution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuiviVeterinaire" (
    "id" SERIAL NOT NULL,
    "id_animal" INTEGER NOT NULL,
    "dateVisite" TIMESTAMP(3) NOT NULL,
    "motif" TEXT NOT NULL,
    "observations" TEXT NOT NULL,
    "traitement" TEXT NOT NULL,
    "validationAdoption" TEXT NOT NULL,

    CONSTRAINT "SuiviVeterinaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parrainage" (
    "id" SERIAL NOT NULL,
    "id_animal" INTEGER NOT NULL,
    "dateDebutParrainage" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "dateFinParrainage" TIMESTAMP(3),

    CONSTRAINT "Parrainage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publication" (
    "id" SERIAL NOT NULL,
    "id_animal" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "heure" TIMESTAMP(3) NOT NULL,
    "titre" TEXT NOT NULL,
    "article" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Publication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "heure" TIMESTAMP(3) NOT NULL,
    "titre" TEXT NOT NULL,
    "article" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Signalement" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "heure" TIMESTAMP(3) NOT NULL,
    "lieu" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "emailFacultatif" TEXT NOT NULL,

    CONSTRAINT "Signalement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VitrineProduits" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "VitrineProduits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aider" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "financier" BOOLEAN NOT NULL,
    "materiel" BOOLEAN NOT NULL,
    "parrainage" BOOLEAN NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Aider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "cp" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "adoptantId" INTEGER,
    "animalId" INTEGER,
    "parrainageId" INTEGER,
    "blogId" INTEGER,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanningBalades" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "heure" TIMESTAMP(3) NOT NULL,
    "chien_chat" TEXT NOT NULL,

    CONSTRAINT "PlanningBalades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Creneaux" (
    "id" SERIAL NOT NULL,
    "id_users" INTEGER NOT NULL,
    "id_planning" INTEGER NOT NULL,

    CONSTRAINT "Creneaux_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlanningBaladesToUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PlanningBaladesToUsers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Adoptant_email_key" ON "Adoptant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE INDEX "_PlanningBaladesToUsers_B_index" ON "_PlanningBaladesToUsers"("B");

-- AddForeignKey
ALTER TABLE "Adoption" ADD CONSTRAINT "Adoption_id_animal_fkey" FOREIGN KEY ("id_animal") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adoption" ADD CONSTRAINT "Adoption_id_adoptant_fkey" FOREIGN KEY ("id_adoptant") REFERENCES "Adoptant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evolution" ADD CONSTRAINT "Evolution_id_animal_fkey" FOREIGN KEY ("id_animal") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuiviVeterinaire" ADD CONSTRAINT "SuiviVeterinaire_id_animal_fkey" FOREIGN KEY ("id_animal") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parrainage" ADD CONSTRAINT "Parrainage_id_animal_fkey" FOREIGN KEY ("id_animal") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Publication" ADD CONSTRAINT "Publication_id_animal_fkey" FOREIGN KEY ("id_animal") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_adoptantId_fkey" FOREIGN KEY ("adoptantId") REFERENCES "Adoptant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_parrainageId_fkey" FOREIGN KEY ("parrainageId") REFERENCES "Parrainage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Creneaux" ADD CONSTRAINT "Creneaux_id_users_fkey" FOREIGN KEY ("id_users") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Creneaux" ADD CONSTRAINT "Creneaux_id_planning_fkey" FOREIGN KEY ("id_planning") REFERENCES "PlanningBalades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanningBaladesToUsers" ADD CONSTRAINT "_PlanningBaladesToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "PlanningBalades"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanningBaladesToUsers" ADD CONSTRAINT "_PlanningBaladesToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
