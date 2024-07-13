export default function App() {
  return (
    <>
      <CardWrapper>
            <CardWrapper>
              <CardWrapper>
                <CardWrapper> children meow</CardWrapper>
              </CardWrapper>
            </CardWrapper>
      </CardWrapper>
    </>
  );
}

function CardWrapper({ children }) {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        height: 100,
        width: 100,
        border: "20px solid yellow",
        padding: 15,
      }}
    >
      {children}
    </div>
  );
}
