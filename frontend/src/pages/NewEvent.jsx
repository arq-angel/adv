import EventForm from "../components/EventForm.jsx";

const NewEventPage = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <EventForm method="POST"/>
    )
}

export default NewEventPage;
