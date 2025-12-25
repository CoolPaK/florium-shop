# Инструкция по развертыванию Florium Shop

## Локальная разработка

### 1. Подготовка окружения

Убедитесь, что у вас установлены:
- Node.js (версия 16 или выше)
- npm (обычно идет с Node.js)

### 2. Клонирование и установка

```bash
# Клонируйте проект (если используете Git)
git clone <ваш-репозиторий>
cd florium-shop

# ИЛИ создайте структуру вручную
mkdir florium-shop
cd florium-shop

# Создайте package.json
npm init -y

# Установите зависимости
npm install react react-dom react-icons
npm install --save-dev vite @vitejs/plugin-react