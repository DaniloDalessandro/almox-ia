# almox-ia

Este projeto é uma aplicação web completa projetada para **gerenciamento de almoxarifado/inventário**. Ele combina um backend robusto em Django com um frontend moderno em Next.js para fornecer uma solução abrangente para gerenciar itens, níveis de estoque e movimentações dentro de um almoxarifado.

## Funcionalidades

*   Autenticação de usuário (login, logout, registro).
*   Geração e validação de tokens JWT (JSON Web Tokens).
*   **Gerenciamento de itens (adicionar, editar, excluir itens).**
*   **Rastreamento de níveis de estoque.**
*   **Registro de movimentações de estoque (entradas e saídas).**
*   Gerenciamento de perfil de usuário.
*   Funcionalidade de redefinição de senha.
*   Estrutura de projeto modular e escalável.

## Tecnologias Utilizadas

### Backend (Python/Django)

*   **Django**: Framework web para desenvolvimento rápido e seguro.
*   **Django REST Framework (DRF)**: Para construção de APIs RESTful.
*   **djangorestframework-simplejwt**: Autenticação JWT para DRF.
*   **python-decouple**: Para gerenciamento de variáveis de ambiente.
*   **CORS Headers**: Para lidar com requisições Cross-Origin Resource Sharing.
*   **SQLite**: Banco de dados padrão para desenvolvimento.

### Frontend (TypeScript/Next.js)

*   **Next.js**: Framework React para renderização de lado do servidor e geração de sites estáticos.
*   **React**: Biblioteca JavaScript para construção de interfaces de usuário.
*   **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
*   **TailwindCSS**: Framework CSS utilitário para estilização rápida.
*   **Radix UI**: Biblioteca de componentes sem estilo para UI acessível.
*   **jwt-decode**: Para decodificar tokens JWT no cliente.
*   **Lucide React**: Biblioteca de ícones.

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes softwares instalados:

*   **Python 3.8+**: [python.org](https://www.python.org/)
*   **Node.js 18+ & npm (ou yarn)**: [nodejs.org](https://nodejs.org/en/)
*   **Git**: [git-scm.com](https://git-scm.com/)

## Configuração do Projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Clonar o Repositório

```bash
git clone https://github.com/DaniloDalessandro/almox-ia.git
cd chama-ia
```

### 2. Configuração do Backend

Navegue até o diretório `back` e configure o ambiente Python.

```bash
cd back
```

#### 2.1. Criar e Ativar Ambiente Virtual

```bash
python -m venv venv
# No Windows
.\venv\Scripts\activate
# No macOS/Linux
source venv/bin/activate
```

#### 2.2. Instalar Dependências

```bash
pip install -r requirements.txt
```

#### 2.3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na pasta `back` (baseado no `.env.example`) com as seguintes variáveis:

```ini
SECRET_KEY='sua_chave_secreta_aqui'
DEBUG=True
ALLOWED_HOSTS='localhost,127.0.0.1'
```

*   `SECRET_KEY`: Uma chave secreta longa e aleatória para o Django. Você pode gerar uma com `python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'`
*   `DEBUG`: `True` para desenvolvimento, `False` para produção.
*   `ALLOWED_HOSTS`: Lista de hosts permitidos, separados por vírgula.

#### 2.4. Rodar Migrações do Banco de Dados

```bash
python manage.py migrate
```

#### 2.5. Criar um Superusuário (Opcional, para acesso ao Django Admin)

```bash
python manage.py createsuperuser
```

#### 2.6. Iniciar o Servidor de Desenvolvimento do Backend

```bash
python manage.py runserver
```

O backend estará acessível em `http://127.0.0.1:8000`.

### 3. Configuração do Frontend

Abra um novo terminal, navegue até o diretório `front` e configure o ambiente Node.js.

```bash
cd ../front
```

#### 3.1. Instalar Dependências

```bash
npm install # ou yarn install
```

#### 3.2. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na pasta `front` (baseado no `.env.example`) com a seguinte variável:

```ini
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
```

*   `NEXT_PUBLIC_API_URL`: A URL base da sua API Django.

#### 3.3. Iniciar o Servidor de Desenvolvimento do Frontend

```bash
npm run dev # ou yarn dev
```

O frontend estará acessível em `http://localhost:3000`.

## Acessando o Projeto

*   **Backend API**: `http://127.0.0.1:8000/api/` (verifique `back/core/urls.py` e `back/accounts/urls.py` para endpoints específicos)
*   **Frontend**: `http://localhost:3000`

---

## Próximos Passos e Melhorias (Opcional)

Este projeto oferece uma base sólida, mas algumas melhorias podem ser consideradas:

*   **Testes Automatizados**: Implementar testes unitários e de integração para garantir a robustez e facilitar a manutenção.
*   **Envio de E-mail**: Finalizar a integração de envio de e-mails para funcionalidades como redefinição de senha.
*   **Banco de Dados em Produção**: Migrar para um banco de dados mais adequado para produção, como PostgreSQL.
*   **Containerização (Docker)**: Usar Docker e Docker Compose para facilitar a configuração do ambiente de desenvolvimento e o deploy.
*   **CI/CD**: Configurar um pipeline de Integração Contínua/Entrega Contínua (CI/CD) para automatizar testes e deploy.
