import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
//!! RegisterForm Componentine taşı:  import { Box, Button, TextField } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from "formik";
import * as Yup from "yup";
import {Box} from "@mui/material"
import RegisterForm from "../components/RegisterForm";


const Register = () => {

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Minimum 5 character')
      .max(50, 'Maximum 50 character')
      .required('Required'),

    lastName: Yup.string()
      .min(2, 'Minimum 5 character')
      .max(50, 'Maximum 50 character')
      .required('Required'),

    userName: Yup.string()
      .min(2, 'Minimum 5 character')
      .max(50, 'Maximum 50 character')
      .required('Required'),

    email: Yup.string().email('Invalid email').required('Required'),

    password: Yup.string().min(8, "Minimum 8 character")
    .matches(/[a-z]/,"Password must contain lowercase characters.")
    .matches(/[A-Z]/,"Password must contain uppercase characters.")
    .matches(/\+d/,"Password must contain a numeric value.")
    .matches(/[@$?!%&*]+/,"Password must contain uppercase characters(@$?!%&*).")
    .required('Required'),
  });


  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              userName: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values)=>{
              console.log(values);
            }}
            component={(props)=>(<RegisterForm {...props}/>)}
          >
            {/* //!!AYRI BİR COMPONENT OLARAK YAZDIK BURAYI.
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  name="userName"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  value={values.userName}
                  onChange={handleChange}
                  error={touched.userName && errors.userName}
                  helperText={touched.userName && errors.userName}
                  onBlur={handleBlur}
                  margin="normal"
                />
                <TextField
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  value={values.firstName}
                  onChange={handleChange}
                  error={touched.firstName && errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  onBlur={handleBlur}
                  margin="normal"
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  value={values.lastName}
                  onChange={handleChange}
                  error={touched.lastName && errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  onBlur={handleBlur}
                  margin="normal"
                />
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                  margin="normal"
                  type="email"
                />
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && errors.password}
                  helperText={touched.password && errors.password}
                  onBlur={handleBlur}
                  margin="normal"
                  type="password"
                />

                <Button 
                variant="contained"
                fullWidth
                type="submit"
                >SUBMIT
                </Button>
              </form>
            )} */}
         </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
