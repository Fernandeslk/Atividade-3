# Sistema de Reservas de Hotel

Aplicação em **TypeScript** que simula o gerenciamento de reservas de um hotel,
permitindo registrar, cancelar e consultar o status dos quartos.

---

## Estrutura do Projeto

    src/
    ├── Reserva.ts
    ├── Hotel.ts
    └── index.ts
    tsconfig.json

---

## Como Executar

### Pré-requisitos
- Node.js (v18+)
- TypeScript: `npm install -g typescript ts-node`

### Passos

```bash
npx ts-node src/index.ts
```

Ou compilando antes:

```bash
tsc
node dist/index.js
```

---

## Testes Realizados

| Cenário | Resultado esperado |
|---|---|
| Registrar 3 reservas | ✅ Sucesso |
| Registrar quarto já reservado | ❌ Erro tratado |
| Cancelar reserva existente | ✅ Sucesso |
| Cancelar quarto sem reserva | ❌ Erro tratado |
| Consultar quarto reservado | ✅ Retorna "Reservado" |
| Consultar quarto cancelado | ✅ Retorna "Disponível" |
| Consultar quarto inexistente | ✅ Retorna "Disponível" |