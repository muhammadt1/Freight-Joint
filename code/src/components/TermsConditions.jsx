import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  List,
  ListItem
} from '@chakra-ui/react';

export default function Terms({ isTermsOpen, onCloseTerms }) {
  return (
    <Modal isOpen={isTermsOpen} onClose={onCloseTerms}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Terms of Service</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List spacing={3}>
            {/* Registration and Account Maintenance */}
            <ListItem>Shippers must provide accurate, complete, and updated registration information.</ListItem>
            <ListItem>Responsible for safeguarding login credentials.</ListItem>
            <ListItem>Account activity is the shipper's responsibility.</ListItem>

            {/* Usage of Service */}
            <ListItem>Only legitimate, clear, and accurate load details allowed.</ListItem>
            <ListItem>Misleading, fraudulent, or illegal postings are prohibited.</ListItem>
            <ListItem>Possible account suspension for rule violations.</ListItem>

            {/* Payment Policies */}
            <ListItem>Agreement to subscription fees, posting fees, and other charges.</ListItem>
            <ListItem>Payments are non-refundable unless specified.</ListItem>

            {/* Role of Freight Joint */}
            <ListItem>Acts as a neutral facilitator between shippers and carriers.</ListItem>
            <ListItem>Encourages shippers to independently vet carriers.</ListItem>

            {/* Protection of Intellectual Property */}
            <ListItem>Content owned by Freight Joint, requiring permission for distribution or copying.</ListItem>

            {/* Privacy and Data Protection */}
            <ListItem>Adherence to the platform’s privacy policy.</ListItem>
            <ListItem>Prohibition against misuse of personal data.</ListItem>

            {/* Cancellation and No-shows */}
            <ListItem>Penalties for insufficient notice on load cancellations.</ListItem>
            <ListItem>Account suspension for repeated failures to honor posted loads.</ListItem>

            {/* Dispute Handling */}
            <ListItem>Encouragement for amicable dispute resolution.</ListItem>
            <ListItem>Mediation services available but not mandatory.</ListItem>

            {/* Limitations on Liability */}
            <ListItem>Freight Joint not responsible for transaction-related losses or damages.</ListItem>

            {/* Links and Third-party Integrations */}
            <ListItem>External services and links used at the shipper’s risk.</ListItem>

            {/* Service Availability */}
            <ListItem>Occasional downtimes for maintenance or technical issues.</ListItem>

            {/* Feedback and Ratings */}
            <ListItem>Shipper reviews of carriers must be factual and non-defamatory.</ListItem>

            {/* Termination Rights */}
            <ListItem>Freight Joint can suspend or terminate accounts for terms breach.</ListItem>

            {/* Modifications to Service */}
            <ListItem>Possible updates to features, offerings, or terms.</ListItem>

            {/* Jurisdiction */}
            <ListItem>Disputes governed by Transport Canada’s Motor Carrier Division laws.</ListItem>

            {/* Indemnity */}
            <ListItem>Shippers indemnify Freight Joint against liabilities from platform misuse.</ListItem>

            {/* Entire Agreement */}
            <ListItem>Terms and referenced policies represent the full agreement.</ListItem>

            {/* Contact */}
            <ListItem>Queries and concerns directed to amandippadda@outlook.com / 403-702-6157.</ListItem>
          </List>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCloseTerms}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
