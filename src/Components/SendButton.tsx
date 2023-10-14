import { Component } from "react";
import axios from 'axios';


interface Props {
    text: string;
}

export class SendButton extends Component<Props>{

    state = { data: null, hasError: false }
    
    click = async () => {
        if(this.props.text == "") {
            this.setState({data: "Ошибка: Поле ввода ссылки пустое", hasError: true })
            return;
        }
        
        await axios
            .get(this.props.text)
            .then((response) => {
                const { data, status } = response;
            
                var str = JSON.stringify(data, null, 4)

                this.setState({data: str, hasError: false })
        
                console.log(str);
            })
            .catch((error) => {
                var err = "";
                if (error.response) 
                    err = 'Ошибка ' + error.response.status + ': ' + error.response.data
                else if (error.request) 
                    err = 'Неверный формат ссылки или ошибка сети: ' + error.request
                else 
                    err = 'Проблема с браузером или с библиотекой axios: ' + error.message
                console.log(err)
                this.setState({data: err, hasError: true })
            });
    }

    render() {
        return <>
        <button onClick={this.click}>Отправить</button>
        <div style={{color: this.state.hasError ? 'red' : ''}}>{this.state.data}</div>
        </>
    }
}
