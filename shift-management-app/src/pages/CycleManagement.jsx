const CycleManagement = () => (
    <>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <CycleForm />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <CycleTable />
        </Paper>
      </Grid>
    </>
  );
  export default CycleManagement;