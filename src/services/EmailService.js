// This service provides mock functionality for email style adjustment
// In a real application, this would connect to a language model API

const EmailService = {
  // Mock tone adjustment function
  adjustEmailStyle: (email, tone, recipientType, emailPurpose) => {
    return new Promise((resolve, reject) => {
      // Add a slight delay to simulate API call
      setTimeout(() => {
        if (!email || email.trim() === '') {
          reject(new Error('Please enter an email to adjust'));
          return;
        }

        if (!tone) {
          reject(new Error('Please select a tone for your email'));
          return;
        }

        // In a real application, we would call a language model API here
        // For now, we'll just add some mock transformations based on the tone
        
        let adjustedEmail = email;
        
        switch(tone) {
          case 'formal':
            adjustedEmail = addFormalTone(email, recipientType, emailPurpose);
            break;
          case 'friendly':
            adjustedEmail = addFriendlyTone(email, recipientType, emailPurpose);
            break;
          case 'neutral':
            adjustedEmail = addNeutralTone(email, recipientType, emailPurpose);
            break;
          case 'urgent':
            adjustedEmail = addUrgentTone(email, recipientType, emailPurpose);
            break;
          case 'thankful':
            adjustedEmail = addThankfulTone(email, recipientType, emailPurpose);
            break;
          case 'apologetic':
            adjustedEmail = addApologeticTone(email, recipientType, emailPurpose);
            break;
          default:
            adjustedEmail = email;
        }
        
        resolve(adjustedEmail);
      }, 1000);
    });
  }
};

// Helper functions for different tones
function addFormalTone(email, recipientType, purpose) {
  let salutation = "Dear ";
  if (recipientType === "Colleague" || recipientType === "Manager") {
    salutation += "[Colleague's Name/Manager's Name],\n\n";
  } else if (recipientType === "Client") {
    salutation += "[Client's Name],\n\n";
  } else {
    salutation += "[Recipient's Name],\n\n";
  }
  
  let closing = "\n\nThank you for your consideration.\n\nSincerely,\n[Your Name]";
  
  // Replace casual language with more formal alternatives
  let body = email
    .replace(/hi|hey|hello/i, "Greetings")
    .replace(/thanks|thx/i, "Thank you")
    .replace(/sorry/i, "I apologize")
    .replace(/want|wanna|need/i, "would like to request")
    .replace(/get back to me/i, "respond at your convenience")
    .replace(/asap/i, "as soon as possible")
    .replace(/fyi/i, "for your information");
  
  return salutation + body + closing;
}

function addFriendlyTone(email, recipientType, purpose) {
  let salutation = "Hey ";
  if (recipientType === "Colleague") {
    salutation += "[Colleague's Name]!\n\n";
  } else if (recipientType === "Friend") {
    salutation += "[Friend's Name]!\n\n";
  } else {
    salutation += "there!\n\n";
  }
  
  let closing = "\n\nThanks a bunch!\n[Your Name]";
  
  // Replace formal language with more friendly alternatives
  let body = email
    .replace(/Dear Sir\/Madam/i, "Hi there")
    .replace(/I would like to inform you/i, "Just wanted to let you know")
    .replace(/please be advised/i, "heads up")
    .replace(/at your earliest convenience/i, "when you get a chance")
    .replace(/I look forward to/i, "Can't wait to")
    .replace(/Sincerely|Regards/i, "Cheers");
  
  return salutation + body + closing;
}

function addNeutralTone(email, recipientType, purpose) {
  let salutation = "Hello,\n\n";
  let closing = "\n\nRegards,\n[Your Name]";
  
  // Keep the email largely unchanged, just add standard structure
  return salutation + email + closing;
}

function addUrgentTone(email, recipientType, purpose) {
  let salutation = "Attention: ";
  if (recipientType) {
    salutation += `[${recipientType}'s Name],\n\n`;
  } else {
    salutation += "[Recipient's Name],\n\n";
  }
  
  let subject = "URGENT: " + (purpose || "Action Required");
  let closing = "\n\nYour immediate attention to this matter is greatly appreciated.\n\nRegards,\n[Your Name]";
  
  // Add urgency words/phrases
  let body = email
    .replace(/when you have time/i, "as soon as possible")
    .replace(/in the future/i, "immediately")
    .replace(/sometime/i, "today")
    .replace(/would you mind/i, "please")
    .replace(/consider/i, "act on");
  
  return `${salutation}Subject: ${subject}\n\n${body}${closing}`;
}

function addThankfulTone(email, recipientType, purpose) {
  let salutation = "Dear ";
  if (recipientType) {
    salutation += `[${recipientType}'s Name],\n\n`;
  } else {
    salutation += "[Recipient's Name],\n\n";
  }
  
  let opening = "I wanted to express my sincere gratitude for ";
  let closing = "\n\nI truly appreciate your help and support.\n\nWith gratitude,\n[Your Name]";
  
  // Enhance thankful expressions
  let body = email
    .replace(/thanks|thank you/i, "I am incredibly grateful")
    .replace(/appreciate it/i, "deeply value your contribution")
    .replace(/helped me/i, "went above and beyond to assist me");
  
  return salutation + opening + body + closing;
}

function addApologeticTone(email, recipientType, purpose) {
  let salutation = "Dear ";
  if (recipientType) {
    salutation += `[${recipientType}'s Name],\n\n`;
  } else {
    salutation += "[Recipient's Name],\n\n";
  }
  
  let opening = "I sincerely apologize for ";
  let closing = "\n\nI understand the inconvenience this may have caused, and I am committed to making things right.\n\nSincerely apologetic,\n[Your Name]";
  
  // Enhance apologetic expressions
  let body = email
    .replace(/sorry/i, "I deeply regret")
    .replace(/my mistake/i, "my error in judgment")
    .replace(/won't happen again/i, "I assure you that this will not be repeated")
    .replace(/fix/i, "rectify");
  
  return salutation + opening + body + closing;
}

export default EmailService;