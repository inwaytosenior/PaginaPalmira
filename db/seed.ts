import { db, passw, Profesor, Student } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(passw).values([
		{username: "Pablo24", password: "miracolous27"},
		{username: "Maricarmen099", password: "chilerellenoconsalsa_2"},
		{username: "JorgePamez", password: ""},
		{username: "EstudiantePromedio2", password: "averagepassword2"},
	])
}
