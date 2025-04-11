
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdoptantScalarFieldEnum = {
  id: 'id',
  nom: 'nom',
  prenom: 'prenom',
  email: 'email',
  telephone: 'telephone',
  adresse: 'adresse',
  cp: 'cp',
  ville: 'ville',
  historiqueAdoption: 'historiqueAdoption',
  commentaires: 'commentaires'
};

exports.Prisma.AdoptionScalarFieldEnum = {
  id: 'id',
  dateAdoption: 'dateAdoption',
  typeAdoption: 'typeAdoption',
  id_animal: 'id_animal',
  id_adoptant: 'id_adoptant'
};

exports.Prisma.AnimalScalarFieldEnum = {
  id: 'id',
  nom: 'nom',
  age: 'age',
  sexe: 'sexe',
  espece: 'espece',
  race: 'race',
  N_identification: 'N_identification',
  description: 'description',
  image: 'image',
  statut: 'statut',
  dateArrivee: 'dateArrivee'
};

exports.Prisma.EvolutionScalarFieldEnum = {
  id: 'id',
  id_animal: 'id_animal',
  date: 'date',
  motif: 'motif',
  observations: 'observations'
};

exports.Prisma.SuiviVeterinaireScalarFieldEnum = {
  id: 'id',
  id_animal: 'id_animal',
  dateVisite: 'dateVisite',
  motif: 'motif',
  observations: 'observations',
  traitement: 'traitement',
  validationAdoption: 'validationAdoption'
};

exports.Prisma.ParrainageScalarFieldEnum = {
  id: 'id',
  id_animal: 'id_animal',
  dateDebutParrainage: 'dateDebutParrainage',
  description: 'description',
  dateFinParrainage: 'dateFinParrainage'
};

exports.Prisma.PublicationScalarFieldEnum = {
  id: 'id',
  id_animal: 'id_animal',
  date: 'date',
  heure: 'heure',
  titre: 'titre',
  article: 'article',
  image: 'image'
};

exports.Prisma.BlogScalarFieldEnum = {
  id: 'id',
  date: 'date',
  heure: 'heure',
  titre: 'titre',
  article: 'article',
  image: 'image'
};

exports.Prisma.SignalementScalarFieldEnum = {
  id: 'id',
  date: 'date',
  heure: 'heure',
  lieu: 'lieu',
  description: 'description',
  emailFacultatif: 'emailFacultatif'
};

exports.Prisma.VitrineProduitsScalarFieldEnum = {
  id: 'id',
  nom: 'nom',
  description: 'description',
  prix: 'prix'
};

exports.Prisma.AiderScalarFieldEnum = {
  id: 'id',
  date: 'date',
  nom: 'nom',
  prenom: 'prenom',
  email: 'email',
  telephone: 'telephone',
  financier: 'financier',
  materiel: 'materiel',
  parrainage: 'parrainage',
  message: 'message'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  username: 'username',
  nom: 'nom',
  prenom: 'prenom',
  motDePasse: 'motDePasse',
  telephone: 'telephone',
  adresse: 'adresse',
  cp: 'cp',
  ville: 'ville',
  role: 'role',
  adoptantId: 'adoptantId',
  animalId: 'animalId',
  parrainageId: 'parrainageId',
  blogId: 'blogId'
};

exports.Prisma.PlanningBaladesScalarFieldEnum = {
  id: 'id',
  date: 'date',
  heure: 'heure',
  chien_chat: 'chien_chat'
};

exports.Prisma.CreneauxScalarFieldEnum = {
  id: 'id',
  id_users: 'id_users',
  id_planning: 'id_planning'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Adoptant: 'Adoptant',
  Adoption: 'Adoption',
  Animal: 'Animal',
  Evolution: 'Evolution',
  SuiviVeterinaire: 'SuiviVeterinaire',
  Parrainage: 'Parrainage',
  Publication: 'Publication',
  Blog: 'Blog',
  Signalement: 'Signalement',
  VitrineProduits: 'VitrineProduits',
  Aider: 'Aider',
  Users: 'Users',
  PlanningBalades: 'PlanningBalades',
  Creneaux: 'Creneaux'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
