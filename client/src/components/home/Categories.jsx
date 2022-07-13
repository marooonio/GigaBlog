import {Button, Table, TableBody, TableCell, TableHead, TableRow, styled} from "@mui/material";
import {categories} from "../../constants/data";
import {Link, useSearchParams} from 'react-router-dom';

const StyledTable = styled(Table)`
    border: 1px solid black;
`;

const StyledButton = styled(Button) `
    margin: 20px;
    width: 85%;
    background: #61dafb;
    color: black;
`;

const Categories = () => {

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
        <>
            <Link to={`/create?category${category || ''}`} style={{textDecoration: 'none'}}>
                <StyledButton variant="contained">Stwórz Posta</StyledButton>
            </Link>

            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Link to={"/"}>
                                Wszystkie kategorie
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>
                                    <Link to={`/?category=${category.type}`}>
                                        {category.type};
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;