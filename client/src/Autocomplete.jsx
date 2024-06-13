import { Autocomplete, TextField, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
        default: "#ffffff" // Set white background
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: '16px',
        },
      },
    },
  },
});

export default function AutocompleteField({bookTitles, fetchFunction, setBooks}){

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={bookTitles}
                    sx={{ width: 600,backgroundColor: "white"}} // Adjust width as needed
                    renderInput={(params) => <TextField {...params} label="Search for a book..." />}
                    onInputChange={(event, value) => {fetchFunction(value); setBooks(value)}}

                />
            </ThemeProvider>
        </div>
    );
}