export const sendEmail = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    const { name, email, message } = formData;
    
    // Properly encode all parameters
    const encodedSubject = encodeURIComponent(`Contact from ${name}`);
    const encodedBody = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    
    // Create mailto link with encoded parameters
    const mailtoLink = `mailto:mohite770.pm@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    
    // Create and click a temporary link instead of using window.location
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Return a promise that resolves after a short delay
    return new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
  };