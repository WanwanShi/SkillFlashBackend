import bcrypt from "bcrypt";
import { User } from "../../seeds/seed_test";

const seedData: User[] = [
	{
		username: "kooooo",
		email: "kooooo@yahoo.com",
		password: "UJkabcdh.123DimB",
	},
	{
		username: "Christophe10",
		email: "Carleton.OConnell@yahoo.com",
		password: "UJkq0nqY.123LJhDimB",
	},
	{
		username: "Dino36",
		email: "Carissa_Yost71@hotmail.com",
		password: "f9nC22aG.123H3ejI9X",
	},
	{
		username: "Cole.Corkery",
		email: "Madelynn_Hackett@gmail.com",
		password: "vDtNqknl.123pp5JZdI",
	},
	{
		username: "Kayden.Kuvalis55",
		email: "Kian42@hotmail.com",
		password: "NLcGeOFv.123EudYnmk",
	},
	{
		username: "Emie.Torp-Hermann",
		email: "Emery_Heller0@gmail.com",
		password: "Az01g0GA.123Pcvokk8",
	},
	{
		username: "Lula_Stroman",
		email: "Gia_OReilly@yahoo.com",
		password: "ncdGIPOT.123vFvmqjN",
	},
	{
		username: "Brooke_Bradtke",
		email: "Gregory.Muller@yahoo.com",
		password: "zUz_0n7y.123YXtr8pL",
	},
	{
		username: "Laron96",
		email: "Leola13@hotmail.com",
		password: "nwMOSbws.123zh0sXmO",
	},
	{
		username: "Chelsey_Nikolaus65",
		email: "Ayana.Walker10@hotmail.com",
		password: "ROeC80e_.123bMmPU9C",
	},
	{
		username: "Kyra60",
		email: "Ruben_Bechtelar79@gmail.com",
		password: "O0Vau37D.123jyK7KR1",
	},
	{
		username: "Cyril26",
		email: "Noah.Wehner57@gmail.com",
		password: "_csaDPwf.123C5WuA4x",
	},
	{
		username: "Gabriel43",
		email: "Toby52@hotmail.com",
		password: "QyUjRPjM.123rDhLwEr",
	},
	{
		username: "Skyla.Robel",
		email: "Hilton88@gmail.com",
		password: "MUUNPGS3.123BFToPH2",
	},
	{
		username: "Bridgette_Kozey",
		email: "Pansy.Price55@hotmail.com",
		password: "iYXg10t5.123Ce_QkhS",
	},
	{
		username: "Dulce_Turcotte4",
		email: "Sophia_OKeefe@hotmail.com",
		password: "6GFn0ZKp.123FQEbMAM",
	},
	{
		username: "Kiley65",
		email: "Earl.Kihn-Davis15@yahoo.com",
		password: "FJ9EsbJS.123WpLWhtq",
	},
	{
		username: "Lauriane11",
		email: "Emmanuelle.Emard@yahoo.com",
		password: "ApjDjiqA.123lHFJixw",
	},
	{
		username: "Corbin41",
		email: "Ezequiel94@yahoo.com",
		password: "iIPsgK3_.123ziimv8j",
	},
	{
		username: "Jalyn.Huels40",
		email: "Telly21@hotmail.com",
		password: "i_SuS2sH.1232tCPkUj",
	},
	{
		username: "Madonna38",
		email: "Hillary.Mraz37@yahoo.com",
		password: "ZOT20k95.123kpKlTJO",
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
