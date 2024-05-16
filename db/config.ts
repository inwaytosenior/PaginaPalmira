import { column, defineDb, defineTable } from 'astro:db';

const passw = defineTable({
  columns: {
    username: column.text({ primaryKey: true }),
    password: column.text()
  } 
});

const Profesor = defineTable({

  columns:{
    id_profesor: column.number({ primaryKey: true }),
    username: column.text({ references: () => passw.columns.username })
  }

});

const Student = defineTable({

  columns:{
    id_student: column.number({ primaryKey: true }),
    username: column.text({ references: () => passw.columns.username })
  }

})

// https://astro.build/db/config
export default defineDb({
  tables: {passw, Profesor, Student},
});