/* eslint-disable react/jsx-no-undef */
'use client';
// /app/sections/ContactSection.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { Loader2 } from 'lucide-react';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form validation schema using Yup
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: unknown, setSubmitting:any) => {
    console.log(values);
    setTimeout(() => {
      setIsSubmitted(true);
      setSubmitting(false);
    }, 2000);  // Simulating async submission (e.g. API call)
  };

  // Define the animation for bottom-to-top loading
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="py-10 min-h-[calc(100vh-13rem)]"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
      <Card className="bg-gray-800/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block mb-1 text-gray-300">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block mb-1 text-gray-300"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <label
                    htmlFor="message"
                    className="block mb-1 text-gray-300"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 w-full flex justify-center items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2" /> Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.div>
              </Form>
            )}
          </Formik>
          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-gray-300 mt-4"
            >
              Thank you for contacting us!
            </motion.p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactSection;
