import {
    Container,
    ProfilePicture
} from './styles';

const UserPicture = props => (
    <Container>
        <ProfilePicture href={props.html_url} src={props.url} alt={props.alternativeText} />
    </Container>
);

export default UserPicture;