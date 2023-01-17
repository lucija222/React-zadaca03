import { Component } from "react";

class Form extends Component {
    state = {name: "", years: ""};

    handleSubmit = (e) => {
        e.preventDefault();

        const name = this.state.name;
        const years = parseInt(this.state.years);
        this.props.addNewUser(name, years);

        this.setState({
            name: "", years: ""
          });
    };

    handleChange = (e) => {
        if (e.target.id === "name") {
            this.setState({
                name: e.target.value,
            });
        } else if (e.target.id === "years") {
            this.setState({
                years: e.target.value,
            });
        }

        return;
    };

    render() {
        return (
            <>
                <h2>Not on the list? Join!</h2>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="years">Age:</label>
                        <input
                            type="number"
                            id="years"
                            required
                            value={this.state.years}
                            onChange={this.handleChange}
                        />
                    </div>
                   
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default Form;
