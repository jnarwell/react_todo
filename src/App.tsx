import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import AlertMessage from './components/AlertMessage';
import CategoryType from './types/category';
import Home from './views/Home';



export default function App() {
    const [message, setMessage] = useState<string|null>(null);
    const [category, setCategory] = useState<CategoryType|null>(null);

    const flashMessage = (newMessage:string|null, newCategory:CategoryType|null): void => {
        setMessage(newMessage);
        setCategory(newCategory);
    }

    return (
        <div>
            <Container>
                {message && <AlertMessage category={category!} message={message} flashMessage={flashMessage} />}
                <Home flashMessage={flashMessage}/>
            </Container>
        </div>
    )
}
