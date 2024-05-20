import bcrypt from "bcrypt";
import { User } from "../../seeds/seed_test";

const seedData: User[] = [
	{
		username: "Christophe10",
		email: "Carleton.OConnell@yahoo.com",
		password: "UJkq0nqYLJhDimB",
	},
	{
		username: "Dino36",
		email: "Carissa_Yost71@hotmail.com",
		password: "f9nC22aGH3ejI9X",
	},
	{
		username: "Cole.Corkery",
		email: "Madelynn_Hackett@gmail.com",
		password: "vDtNqknlpp5JZdI",
	},
	{
		username: "Kayden.Kuvalis55",
		email: "Kian42@hotmail.com",
		password: "NLcGeOFvEudYnmk",
	},
	{
		username: "Emie.Torp-Hermann",
		email: "Emery_Heller0@gmail.com",
		password: "Az01g0GAPcvokk8",
	},
	{
		username: "Lula_Stroman",
		email: "Gia_OReilly@yahoo.com",
		password: "ncdGIPOTvFvmqjN",
	},
	{
		username: "Brooke_Bradtke",
		email: "Gregory.Muller@yahoo.com",
		password: "zUz_0n7yYXtr8pL",
	},
	{
		username: "Laron96",
		email: "Leola13@hotmail.com",
		password: "nwMOSbwszh0sXmO",
	},
	{
		username: "Chelsey_Nikolaus65",
		email: "Ayana.Walker10@hotmail.com",
		password: "ROeC80e_bMmPU9C",
	},
	{
		username: "Kyra60",
		email: "Ruben_Bechtelar79@gmail.com",
		password: "O0Vau37DjyK7KR1",
	},
	{
		username: "Cyril26",
		email: "Noah.Wehner57@gmail.com",
		password: "_csaDPwfC5WuA4x",
	},
	{
		username: "Gabriel43",
		email: "Toby52@hotmail.com",
		password: "QyUjRPjMrDhLwEr",
	},
	{
		username: "Skyla.Robel",
		email: "Hilton88@gmail.com",
		password: "MUUNPGS3BFToPH2",
	},
	{
		username: "Bridgette_Kozey",
		email: "Pansy.Price55@hotmail.com",
		password: "iYXg10t5Ce_QkhS",
	},
	{
		username: "Dulce_Turcotte4",
		email: "Sophia_OKeefe@hotmail.com",
		password: "6GFn0ZKpFQEbMAM",
	},
	{
		username: "Kiley65",
		email: "Earl.Kihn-Davis15@yahoo.com",
		password: "FJ9EsbJSWpLWhtq",
	},
	{
		username: "Lauriane11",
		email: "Emmanuelle.Emard@yahoo.com",
		password: "ApjDjiqAlHFJixw",
	},
	{
		username: "Corbin41",
		email: "Ezequiel94@yahoo.com",
		password: "iIPsgK3_ziimv8j",
	},
	{
		username: "Jalyn.Huels40",
		email: "Telly21@hotmail.com",
		password: "i_SuS2sH2tCPkUj",
	},
	{
		username: "Madonna38",
		email: "Hillary.Mraz37@yahoo.com",
		password: "ZOT20k95kpKlTJO",
	},
];
export const seedHasher = async () => {
	const hashedSeed = seedData.map(async (user) => {
		const userCopy = { ...user };
		userCopy.password = await bcrypt.hash(userCopy.password, 10);
		return userCopy;
	});
	return Promise.all(hashedSeed);
};
