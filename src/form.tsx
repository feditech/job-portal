import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';


import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Grid,
  Menu,
  MenuProps,
  MenuItem,
  TextField,
  Typography,
  Autocomplete
} from '@mui/material';








// import { Transition } from '@/components/ThemeComponent/ThemeMenuButtonV2';
// import { StyledTextField } from 'pages/emr/patient/components/PatientSummaryComponents/Demographics/components/StyledComponents';
// import AttachmentButton from './AttachmentButton';
import axios from 'axios';
// import AttachmentButton from './attachmentButton';
// import AttachmentButton from './attachmentButton';

const EditPatientPayment = () => {
//   const dispatch = useDispatch();
//   const { gepatientpaymentbyidData, gepatientpaymentbyidLoader } = useSelector(
//     (state) => state.payment
//   );
const gepatientpaymentbyidData:any={

}
  const paymentpatientForm: any = React.useRef();
//   console.log(gepatientpaymentbyidData, 'DATA');
  


  

  //=====Fax Body Start

  //=====Attachements Array Start
  const [selectedFaxAttachmentArray, setSelectedFaxAttachmentArray] =
    React.useState([]);
  console.log(selectedFaxAttachmentArray, 'selectedFaxAttachmentArray');
  const handleUpload = (e:any) => {
    let tempArr:any = [];
    let filesArray = [...selectedFaxAttachmentArray, ...e.target.files];

    let fileSize = 0;

    for (let file of filesArray) {
    //   if (!isNull(file.id)) continue;

      const fileType = file?.data? file?.type : file?.data?.type;

      const allowedExtensions = [
        'image/jpg',
        'image/jpeg',
        'image/png',
        'image/tiff',
        'image/gif',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];

      if (!allowedExtensions.includes(fileType.toLowerCase())) {
        // SnackbarUtils.error(
        //   'The only allowed extensions are jpg, jpeg, png, gif, tiff, pdf, doc, and docx.',
        //   false
        // );
        e.target.value = null;
        return;
      }

      fileSize += file.data ? file.size : file.data.size;
    }

    if (filesArray.length > 3) {
    //   SnackbarUtils.error('More than 3 files are not allowed.', false);
      e.target.value = null;
      return;
    }

    fileSize = fileSize / 1024 / 1024;

    if (fileSize > 25) {
    //   SnackbarUtils.error('File size more than 25MB is not allowed.', false);
      e.target.value = null;
      return;
    }

    // Function to convert file to Base64
    // Function to convert file to Base64
    const readFileAsBase64 = (file:any) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const result = reader.result;
          if (typeof result === 'string') {
            resolve(result.split(',')[1]);
          } else {
            reject(new Error('Unable to read file as Base64'));
          }
        };
        reader.onerror = (error) => reject(error);
      });
    };

    // Convert each file to Base64 and update tempArr
    const updateTempArr = async () => {
      for (let file of filesArray) {
        if ((file.data) && file.name) {
          const base64Data = await readFileAsBase64(file);
          tempArr.push({
            data: file,
            url: URL.createObjectURL(file),
            fileBase64: base64Data
          });
        }
      }
    };

    // Call the updateTempArr function
    updateTempArr()
      .then(() => {
        let newArray = selectedFaxAttachmentArray.concat(tempArr);

        const newobj = transformData(newArray);
        paymentpatientForm?.current?.setFieldValue('paymentAttachment', newobj);

        setSelectedFaxAttachmentArray(newArray);
      })
      .catch((error) =>
        console.error('Error converting file to Base64:', error)
      );
  };
  function transformData(inputData:any) {
    const paymentAttachment = inputData.map((item:any) => ({
      fileName: item.data.name || 'Unknown', // If name is not provided, set it as "Unknown"
      url: item.url,
      fileBase64: item.fileBase64
    }));

    return paymentAttachment;
  }

  const handleRemoveFile = (index:any) => {
    let selected_files = [...selectedFaxAttachmentArray];
    let deletedItem = selected_files.splice(index, 1);
 
    setSelectedFaxAttachmentArray(selected_files);
  };
  //=====Attachements Array End
//   useEffect(() => {}, [gepatientpaymentbyidData]);
  //==Initial values in formik Start
  const initialValues = {
    createdBy: gepatientpaymentbyidData?.createdBy,
    updatedBy: gepatientpaymentbyidData?.updatedBy,
    createdAt: '2024-03-12T08:57:28.898Z',
    updatedAt: '2024-03-12T08:57:28.898Z',
    isDeleted: false,
    deletedReason: 'string',
    deletedBy: 'string',
    deletedDate: '2024-03-12T08:57:28.898Z',
    id: gepatientpaymentbyidData?.id,
    paymentType: 'string',
    paymentMethod: '',
    payerId: 'string',
    payerName: 'string',
    payerAddress: 'string',
    payerCity: 'string',
    payerState: 'NJ',
    payerZipCode: 'string',
    payerContactPerson: 'string',
    payerContactNumber: 'string',
    patientId: gepatientpaymentbyidData?.patientId
      ? gepatientpaymentbyidData?.patientId
      : '',
    checkNumber: gepatientpaymentbyidData?.checkNumber
      ? gepatientpaymentbyidData?.checkNumber
      : '',
    checkDate: gepatientpaymentbyidData?.checkDate
      ? gepatientpaymentbyidData?.checkDate
      : '',
    receivedDate: gepatientpaymentbyidData?.receivedDate
      ? gepatientpaymentbyidData?.receivedDate
      : '',
    depositDate: gepatientpaymentbyidData?.depositDate
      ? gepatientpaymentbyidData?.depositDate
      : '',
    paidAmount: gepatientpaymentbyidData?.paidAmount
      ? gepatientpaymentbyidData?.paidAmount
      : '',

    writeOffAmount: 0,
    ccTransactionId: 'string',
    ccTransactionDate: '2024-03-12T08:57:28.898Z',
    notes: 'testpayment',
    receiverId: 0,
    practiceId: 0,
    ediResponseDownloadedFileID: 0,
    eraHeaderId: 0,
    status: 'string',
    reF_2U_ID: 'string',
    isAutoPosting: true,
    isAutoActionPerformed: true,
    isDuplicate: true,
    isLocked: true,
    isPosted: false,
    postedBy: 'string',
    postedDate: '2024-03-12T08:57:28.898Z',
    paymentAttachment: gepatientpaymentbyidData?.paymentAttachment || [],
    claimPayment: null,
    claimICN: null
  };

 

 

  //Handle Main Submit Start


  //Incase user cliked on compose button but when user clicked on list to view fax
  if (false) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="55vh" // Adjust the height as needed
      >
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <div>
        <Box>
          <Formik
            enableReinitialize
            initialValues={{ ...initialValues }}
            innerRef={paymentpatientForm}
            onSubmit={(values:any) => {
            //   dispatch(Updatepatientpayment(values));
            }}
            // validationSchema={UserManagementSchema}
            // validationSchema={Yup.object().shape({
            //   recipientFax: Yup.string()
            //     .required('Recipient Fax number is required.')
            //     .min(10, 'Must be at least 10 digits.'),
            //   recipientName: Yup.string()
            //     .required('Recipient Name is required.')
            //     .matches(/^[.,_\-\'@\sa-zA-Z0-9]*$/, 'Invalid characters')
            //     .max(
            //       30,
            //       "Recipient's name must not be more than 30 characters."
            //     )
            //     // .min(30)
            //     .test(
            //       'no-spaces',
            //       'Only spaces are not allowed.',
            //       (value) =>
            //         !value || (value.trim().length > 0 && value.trim() !== '')
            //     )
            // })}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              resetForm,
              isSubmitting,
              touched,
              setFieldValue,
              setFieldTouched,
              values
            }) => (
              <Form id="patientpayment">
                <Grid container>
                 
                
                  <Grid xs={12} lg={4} sx={{ px: 0.5 }}>
                    <Box sx={{ mb: 2 }}>
                      <h1
                       
                       
                      >
                        {' '}
                        Check Number
                      </h1>
                      <Field
                        autoComplete="off"
                        fullWidth
                        size="small"
                        name="checkNumber"
                        value={values.checkNumber}
                        placeholder="Check Number"
                        type="text"
                        component={TextField}
                        onBlur={() => {
                          setFieldTouched('checkNumber');
                        }}
                        inputProps={{
                          style: {
                            // width: '200px',
                            // height: '36px',
                            // height: '1em'
                            // border: '1px solid #D3D9E3'
                            // width: '20%'
                          }
                        }}
                        // error={Boolean(touched.firstName && errors.firstName)}
                        // helperText={touched['firstName'] && errors['firstName']}
                        onChange={(e:any) => {
                          // const capitalizedValue = capitalizefirstCharacterWord(
                          //   e.target.value
                          // );

                          setFieldValue('checkNumber', e.target.value);
                        }}
                        // placeholder={t('First name')}
                      />
                    </Box>
                  </Grid>
                  <Grid xs={12} lg={4} sx={{ px: 0.5 }}>
                    <Box sx={{ mb: 2 }}>
                    
                      <Field
                        autoComplete="off"
                        fullWidth
                        // disabled={disabledboolean}
                        size="small"
                        name="checkDate"
                        value={values.checkDate}
                        future={true}
                        inset
                        type="text"
                        // component={TextField}
                        // component={DatePickerCompo}
                        onBlur={() => {
                          setFieldTouched('checkDate', true);
                        }}
                        // error={
                        //   Boolean(
                        //     touched.checkDate && errors.checkDate
                        //   ) && !disabledboolean
                        // // }
                        // helperText={
                        //   touched['checkDate'] &&
                        //   errors['checkDate'] &&
                        //   !disabledboolean
                        // }
                        onChange={(e:any) => {
                          // const capitalizedValue = capitalizefirstCharacterWord(
                          //   e.target.value
                          // );

                          setFieldValue(
                            'checkDate',
                            e?.toLocaleDateString('en-US')
                          );
                        }}
                        placeholder=" CLIA Expiry"
                      />
                    </Box>
                  </Grid>
                  <Grid xs={12} lg={4} sx={{ px: 0.5 }}>
                    <Box sx={{ mb: 2 }}>
                    
                      <Field
                        autoComplete="off"
                        fullWidth
                        // disabled={disabledboolean}
                        size="small"
                        name="receivedDate"
                        value={values.receivedDate}
                        future={true}
                        inset
                        type="text"
                        // component={TextField}
                        // component={DatePickerCompo}
                        onBlur={() => {
                          setFieldTouched('receivedDate', true);
                        }}
                        // error={
                        //   Boolean(
                        //     touched.receivedDate && errors.receivedDate
                        //   ) && !disabledboolean
                        // // }
                        // helperText={
                        //   touched['receivedDate'] &&
                        //   errors['receivedDate'] &&
                        //   !disabledboolean
                        // }
                        onChange={(e:any) => {
                          // const capitalizedValue = capitalizefirstCharacterWord(
                          //   e.target.value
                          // );

                          setFieldValue(
                            'receivedDate',
                            e?.toLocaleDateString('en-US')
                          );
                        }}
                        placeholder=" CLIA Expiry"
                      />
                    </Box>
                  </Grid>
                  <Grid xs={12} lg={4} sx={{ px: 0.5 }}>
                    <Box sx={{ mb: 2 }}>
                     
                      <Field
                        autoComplete="off"
                        fullWidth
                        // disabled={disabledboolean}
                        size="small"
                        name="depositDate"
                        value={values.depositDate}
                        future={true}
                        inset
                        type="text"
                        // component={TextField}
                        // component={DatePickerCompo}
                        onBlur={() => {
                          setFieldTouched('depositDate', true);
                        }}
                    
                        onChange={(e:any) => {
                       

                          setFieldValue(
                            'depositDate',
                            e?.toLocaleDateString('en-US')
                          );
                        }}
                        placeholder=" CLIA Expiry"
                      />
                    </Box>
                  </Grid>

                  <Grid xs={12} lg={4} sx={{ px: 0.5 }}>
                    <Box sx={{ mb: 2 }}>
                    
                        {' '}
                        Amount
                   
                      <Field
                        autoComplete="off"
                        fullWidth
                        size="small"
                        name="paidAmount"
                        defaultValue={values?.paidAmount}
                        placeholder="Amount"
                        type="text"
                        component={TextField}
                        onBlur={() => {
                          setFieldTouched('paidAmount');
                        }}
                        inputProps={{
                          style: {}
                        }}
                        onChange={(e:any) => {
                          setFieldValue('paidAmount', +e.target.value);
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item md={12} sx={{ px: 0.5 }}>
                    <Box
                      style={{
                        padding: '0px !important',
                        backgroundColor: '#F6F6F6',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                      }}
                    >
                      <Box
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          padding: '15px',
                          border: '1px dashed #cecece',
                          width: '100%',
                          borderRadius: '4px'
                        }}
                      >
                        <label htmlFor="file-input" style={{ display: 'flex' }}>
                          <img src="/statics/RCM/attaachment.svg/" />
                          <input
                            type="file"
                            id="file-input"
                            name="file-input"
                            style={{ display: 'none' }}
                            onChange={handleUpload}
                            multiple
                          />

                         
                            Attachment
                         
                        </label>
                      </Box>
                    </Box>
                  </Grid>

                  {/* //===Form Component Start================================= */}

                  <Grid container px={0.5} mt={1} spacing={1}>
                    {console.log(values, 'values')}
                    {values?.paymentAttachment?.map((item:any, index:any) => {
                      return (
                        <>
                          <Grid item md={6} lg={6} xl={3} key={index} mb={1}>
                            {/* <AttachmentButton
                              item={item}
                              // messageId={viewFaxData?.id}
                              index={index}
                              from={'view'}
                              // downloadFaxLoader={downloadFaxLoader}
                              // messageStatus={viewFaxData?.messageStatus}
                              // faxPageCount={viewFaxData?.faxPageCount}
                            /> */}
                          </Grid>
                        </>
                      );
                    })}
                    {/* viewcomment */}
                    {/* {selectedFaxAttachmentArray.length > 0 ? (
                      selectedFaxAttachmentArray.map((item, index) => {
                        return (
                          <Grid item md={6} lg={6} xl={3} key={index} mb={1}>
                            <AttachmentButton
                              item={item?.data}
                              index={index}
                              handleRemoveFile={handleRemoveFile}
                              // createFaxLoader={createFaxLoader}
                            />
                          </Grid>
                        );
                      })
                    ) : (
                      <></>
                    )} */}
                    {/* //FileViewComment */}
                  
                  </Grid>
                  <Grid xs={12} lg={12} sx={{ px: 0.5 }}>
                    <Box sx={{}}>
                      {/* <ThemeText
                        headingType="normalText"
                        sx={{ ...styleTypObj, mb: 0.5 }}
                      >
                        Comments
                      </ThemeText> */}
                      <Field
                        autoComplete="off"
                        fullWidth
                        size="small"
                        name="comment"
                        placeholder="Please Enter Comment"
                        // value={values.firstName}
                        type="text"
                        multiline
                        rows={2.5}
                        component={TextField}
                        onBlur={() => {
                          setFieldTouched('firstName');
                        }}
                        // error={Boolean(touched.firstName && errors.firstName)}
                        // helperText={touched['firstName'] && errors['firstName']}
                        onChange={(e:any) => {
                          // const capitalizedValue = capitalizefirstCharacterWord(
                          //   e.target.value
                          // );

                          setFieldValue('comment', e.target.value);
                        }}
                        // placeholder={t('First name')}
                      />
                    </Box>
                  </Grid>
                  {/* Attachment End */}
                  {/* <Grid item md={12} mb={0.5}>
                    <Divider
                      sx={{
                        borderColor: '#d3d9e3',
                        borderWidth: '1px',
                        width: '100%'
                      }}
                    />
                  </Grid> */}

                  

                  {/* //===Form Component End================================= */}
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
        {/* disard Popup */}
       
        {/* disard Popup end*/}
      </div>
    );
  }
};

export default EditPatientPayment;
const styleTypObj = {
  fontSize: '11px',
  fontWeight: '600'
};
// export const LabelForFields = (props:any) => {
//   const { bold = true, sx, heading } = props;
//   return (
//     <ThemeText
//       headingType="text"
//       bold={bold}
//       sx={sx}
//       className={'Captital_Every_word'}
//     >
//       {heading}
//     </ThemeText>
//   );
// };