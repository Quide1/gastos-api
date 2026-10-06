// src/db/esquema.ts
const categorias = `
  CREATE TABLE IF NOT EXISTS categorias (
    id     INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL UNIQUE
  ) STRICT
`;

const gastos = `
  CREATE TABLE IF NOT EXISTS gastos (
    id           INTEGER PRIMARY KEY,
    descripcion  TEXT    NOT NULL,
    monto_centavos        INTEGER NOT NULL CHECK (monto > 0),
    fecha        TEXT    NOT NULL,
    categoria_id INTEGER NOT NULL REFERENCES categorias(id),
    creado_en    TEXT    NOT NULL DEFAULT (datetime('now'))
  ) STRICT
`;

const indices = `
  CREATE INDEX IF NOT EXISTS idx_gastos_fecha ON gastos(fecha)
`;

const indiceCategoria = `
  CREATE INDEX IF NOT EXISTS idx_gastos_categoria ON gastos(categoria_id)
`;

export const ESQUEMA = [categorias, gastos, indices, indiceCategoria];