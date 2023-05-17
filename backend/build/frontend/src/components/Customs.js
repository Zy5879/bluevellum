"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const getCustoms_1 = __importDefault(require("../services/getCustoms"));
function Customs() {
    const [customs, setCustoms] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const getData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield getCustoms_1.default.getAllCustoms();
                setCustoms(response);
            }
            catch (error) {
                if (error instanceof Error) {
                    return error.message;
                }
            }
        });
        void getData();
    }, []);
    return (<main>
      <h1>This is Customs</h1>
      <section>
        {customs
            ? customs.map((item) => (<div key={item.id}>
                <p>{item.name}</p>
                <p>{item.cost}</p>
                <img src={item.img}/>
              </div>))
            : ""}
      </section>
    </main>);
}
exports.default = Customs;
