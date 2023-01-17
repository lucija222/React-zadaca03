import React from "react";
import { User } from "./user";
import Form from "./user/Form";

export default class App extends React.Component {
    state = {
        users: [
            { id: 1, name: "Ivan", years: 30 },
            { id: 2, name: "Marko", years: 35 },
            { id: 3, name: "Ana", years: 25 },
        ],
    };

    addNewUser = (name, years) => {
        const { users } = this.state;
        const newUser = {
            id: users[users.length - 1].id + 1,
            name: name,
            years: years,
        };
        const newUsers = [...users, newUser];

        this.setState({ users: newUsers });
    };

    handleButtonPress = () => {
        const { users } = this.state;

        const newUsers = users.map((user) => {
            return { ...user, years: user.years + 1 };
        });

        this.setState({ users: newUsers });
    };

    handleNameChange = (event, index) => {
        const { users } = this.state;
        const newUsers = [...users];

        newUsers[index].name = event.target.value;
        this.setState({ users: newUsers });
    };

    render() {
        const { users } = this.state;

        return (
            <div>
                <h1>React aplikacija</h1>
                <p>Ovo zbilja radi</p>
                <button onClick={this.handleButtonPress}>
                    Promjena godina
                </button>

                {users.map((user, index) => (
                    <User
                        key={user.id}
                        name={user.name}
                        years={user.years}
                        onNameChange={(event) =>
                            this.handleNameChange(event, index)
                        }
                    />
                ))}

                <Form addNewUser={this.addNewUser}/>
               
            </div>
        );
    }
}
