import Header from '../components/Header'
import TimerProvider from '../contexts/TimerContext'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDDf31'
}

const Layout = props => (
    <div>
        <Header />
        <div style={layoutStyle}>
            <TimerProvider>
                {props.children}
            </TimerProvider>
        </div>
    </div>
)

export const withLayout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Header />
            <Page />
        </div>
    );
};

export default Layout;