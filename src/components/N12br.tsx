const N12br = ({ children }: { children: string }) => (
    <>
        {children.split(/(\n)/g).map((t, index) => (t === '\n' ? <br key={index} /> : t))}
    </>
);

export default N12br;
