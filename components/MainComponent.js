const App = () => {
    const [box, setBox] = React.useState(0);

    React.useEffect(() => {
        if (/(iPhone|iPad|Android|Windows Phone|WPDesktop|WP7)/i.test(navigator.userAgent)) {
            // setMobile(true);
        }

        $(window).scroll(function () {

        });
    }, []);

    return (
        <div className="app">
            <div className="app__inner">
                {
                    box ?
                        <Box />
                        :
                        <Home />
                }

            </div>
        </div>
    );
}

const Home = () => {
    return (
        <HomeOuter>
            <Container>
                <HomeInner>
                    <Logo>
                        MusicBox
                    </Logo>
                    <Title>Episode 09: How To Create Your Unique Playlist</Title>
                    <Subtitle>By 2SPL | 11.03.2023 | 190 hours</Subtitle>
                </HomeInner>
            </Container>
        </HomeOuter>
    );
}

const Box = () => {

}

const HomeOuter = styled.div`
    background-image: url(assets/img/home-bg.jpg);
    background-position: center;
    background-size: cover;
`

const Container = styled.div`
    max-width: 1240px;
    margin: auto;
`

const HomeInner = styled.div`
    position: relative;
`

const Logo = styled.div`
    position: absolute;
    content: '';
    top: 0;
    left: 0;
`;

const Title = styled.div`
  width: 200px;
`;

const Subtitle = styled.div`
  width: 200px;
`;

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);