# almox-ia

Sistema de gerenciamento de almoxarifado/inventário. Backend em Django + Frontend em Next.js.

---

## Com Docker (recomendado)

**Pré-requisito:** [Docker Desktop](https://www.docker.com/products/docker-desktop/)

```bash
git clone https://github.com/DaniloDalessandro/almox-ia.git
cd almox-ia
docker compose up --build
```

| Serviço      | URL                        |
|--------------|----------------------------|
| Frontend     | http://localhost:3000      |
| Backend API  | http://localhost:8000/api/ |

> O banco SQLite é persistido no volume `sqlite_data` — os dados não são perdidos ao reiniciar.

**Comandos úteis:**

```bash
docker compose up -d                                        # subir em background
docker compose logs -f                                      # ver logs
docker compose down                                         # parar
docker compose exec backend python manage.py createsuperuser  # criar superusuário
```

---

## Sem Docker (desenvolvimento local)

**Pré-requisitos:** Python 3.11+ e Node.js 18+

### Backend

```bash
cd back
python -m venv venv
source venv/bin/activate        # Windows: .\venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env            # edite o .env com suas configurações
python manage.py migrate
python manage.py runserver
```

### Frontend

Em outro terminal:

```bash
cd front
npm install
# crie front/.env.local com: NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
npm run dev
```
