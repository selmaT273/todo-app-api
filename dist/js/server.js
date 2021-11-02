"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
// import todoRoutes from './routes';
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
// app.use(todoRoutes);
const uri = 'mongodb://localhost:27017/todo';
mongoose_1.default
    .connect(uri)
    .then(() => app.listen(PORT, () => console.log('server is running')))
    .catch(err => {
    throw err;
});
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
