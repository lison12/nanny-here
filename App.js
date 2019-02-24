import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

// Legal Contract w/ Docusign

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>LEGAL CONTRACT</Text>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <Text>Welcome to our family!  We look forward to a long and mutually beneficial relationship.  To make sure we all understand each other’s expectations relating to this arrangement, this Nanny Agreement outlines the scope of our agreement regarding each side’s duties and expectations relating to your employment as a nanny for our children.  Because the childrens’ schedules and needs will adapt over time, expect that changes will be made over time and that we will work together with the goal of meeting their needs.
        This is a legally enforceable document, so make sure you understand and agree to everything in it before signing.  Please ask if you have any questions.</Text>

        <Collapse>
            <CollapseHeader style={styles.collapse}>
              <View>
                <Text style={styles.textButton}>PARTIES</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>This Nanny Agreement is being entered into between the [FAMILY] Family (by [SIGNATOR], referred to in this document as “Family”) and [NANNY] (“Nanny”) on [DATE].
              Family’s residence is [FAMILY STREET ADDRESS], [FAMILY CITY], [FAMILY STATE], [FAMILY ZIP] (“Family Residence”).
              Nanny’s home address is [NANNY STREET ADDRESS], [NANNY CITY], [NANNY STATE], [NANNY ZIP].
              Contact phone numbers for the Family are –
              Primary: [PRIMARY NAME], [PRIMARY PHONE NO 1] or [PRIMARY PHONE NO 2]
              Secondary: [SECONDARY NAME], [SECONDARY PHONE NO 1] OR [SECONDARY PHONE NO 2]
              Contact phone numbers for the Nanny are –
              Nanny:  [NANNY PHONE NO 1] or [NANNY PHONE NO 2]
              Other contact person for Nanny:  [OTHER CONTACT NAME], [OTHER CONTACT CONNECTION], [OTHER CONTACT PHONE NO]</Text>
            </CollapseBody>
        </Collapse>
        <Collapse>
            <CollapseHeader style={styles.collapse}>
              <View>
                <Text style={styles.textButton}>CHILDREN</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>Nanny is being hired to provide childcare for the following Family children:
                [CHILD NAME 1], [CHILD 1 DOB]
                [CHILD NAME 2], [CHILD 2 DOB]
                [CHILD NAME 3], [CHILD 3 DOB]
                [CHILD NAME 4], [CHILD 4 DOB]
                (collectively, the “Children”).</Text>
            </CollapseBody>
        </Collapse>
        <Collapse>
            <CollapseHeader style={styles.collapse}>
              <View>
                <Text style={styles.textButton}>WORK LOCATION</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>Childcare provided under this Nanny Agreement will be performed at the Family Residence, unless otherwise indicated.  Nanny will not take the Children to any other location without advance notice and permission of the Family.
              In addition to childcare at the Family Residence, Nanny will transport one or more children to and from school or activities as follows: [TRANSPORTATION DETAILS]</Text>
            </CollapseBody>
        </Collapse>
        <Collapse>
            <CollapseHeader style={styles.collapse}>
              <View>
                <Text style={styles.textButton}>SCHEDULE</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>Nanny will provide childcare for the Children beginning on or after the following Start Date:  [START DATE] and services will continue until this Nanny Agreement is terminated by either Party according to the terms of this Agreement.
              Nanny will work for the Family for approximately [WEEKLY HOUR ESTIMATE] hours per week, and [DAYS PER WEEK ESTIMATE] days per week.
              The usual work schedule for the Nanny as of the start of this Nanny Agreement will be as set forth in the attached Appendix A.  This schedule will be modified by mutual agreement of the Parties from time to time as required by the Family’s, Nanny’s, or the Childrens’ schedules.</Text>
            </CollapseBody>
        </Collapse>
        <Collapse>
            <CollapseHeader style={styles.collapse}>
              <View>
                <Text style={styles.textButton}>COMPENSATION</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>Nanny will be paid a regularly hourly rate of $[HOURLY RATE] per hour.  As a general matter, Nanny will not be asked to work more hours in an 24-hour period or within a week that would require payment of overtime wages as a matter of law.  However, in the event such hours are required and worked, Nanny will be paid the appropriate overtime multiplier of the hourly rate as is required under law.
              Nanny’s pay under this Nanny Agreement will be treated as an hourly wages, not payments to an independent contractor, and thus the Family will make withholding as required by law, and issue the required W-2 or other documents relating to those withholdings and payments.
              Nanny will provide a written list of the hours worked to Family [HOW FREQUENTLY] and will be paid for those hours [WHEN PAYMENTS MADE].</Text>
            </CollapseBody>
        </Collapse>
        <Collapse>
            <CollapseHeader style={styles.collapse}>
              <View>
                <Text style={styles.textButton}>CONFIDENTIALITY</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>Nanny understands and agrees that as a result of her work with the Family and Children, he/she will have access to private information (including medical, financial, legal, career, and educational) that must be kept strictly confidential and may not be disclosed to any third party for any reason.  This confidentiality obligation survives termination of this Agreement, meaning Nanny cannot disclose information even after leaving the Family’s employ, whether with or without cause.

              This confidentiality obligation includes a prohibition of providing any of the following on social media without the Family’s explicit consent – direct or indirect information about the location or schedule of the Children or the Family, or posting of pictures of the Children, Family, or Family Residence at any time.

              The only exceptions to this confidentiality obligation are the following:  (1) an immediate threat to the health, safety, and welfare of the Family or the Children (for example, calling 911 in the event of a medical emergency); (2) being compelled to produce information by a court or governmental agency (for example, by a subpoena).  In the event of any effort to compel production of information, Nanny shall immediately advise the Family of the effort to enable any appropriate objections to be made.</Text>
            </CollapseBody>
        </Collapse>
        <Collapse>
            <CollapseHeader style={styles.collapse}>
              <View>
                <Text style={styles.textButton}>TERMINATION OF AGREEMENT</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>Employment of Nanny under this Nanny Agreement is an at-will employment arrangement, meaning that either the Nanny or the Family can terminate this Agreement with or without cause.  To protect both sides to this Agreement, however, termination of this Agreement can only be done in the following manner.

              The Family may terminate this Nanny Agreement for cause for any of the following reasons:  jeopardizing the safety or well-being of any of the Children or other family members, repeated tardiness, inconsistent or inadequate performance of job responsibilities, theft, dishonesty with Children or family members, misuse of Family Residence or personal property, breach of confidentiality agreement, allowing unauthorized guests to be in the Family Residence, consumption of, or being impaired by, alcohol or drugs of any kind while working (with the exclusion of properly used prescription medications that do not impair Nanny’s ability to care for the Children), any criminal activity whether on or off duty.  In the event of termination for cause as described here, the Family is not required to provide any advance notice.  The Family will simply provide a written notice of termination (handwritten is acceptable) to Nanny setting forth the reason for termination and the date and time of such termination.  In the event of termination for cause, Family will submit payment to Nanny for time worked up until the date and time of termination within 48 hours of termination, and Nanny will at that time turn over any keys, security access cards, or any other property belonging to the Family that is in the Nanny’s possession.

              The Nanny may terminate this Nanny Agreement for cause for any of the following reasons: [NANNY TERMINATION CAUSE].  In the event of termination for cause as described here, [NANNY TERMINATION RESULT].</Text>
            </CollapseBody>
        </Collapse>
        <Collapse>
            <CollapseHeader style={styles.collapse}>
              <View>
                <Text style={styles.textButton}>REPRESENTATIONS</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>Nanny represents and warrants to the Family that Nanny has been truthful and complete in all information provided to Family regarding qualifications, job history, and prior conduct and understands that if Nanny has not been accurate, truthful and complete in disclosure, that will be grounds for immediate termination of this Nanny Agreement.

              Family reserves the right at any time to conduct a complete criminal background check and/or check of any references or prior employers of Nanny and disclosure of any information in regards to such checks discloses any matter that Family believes would impact the propriety of Nanny continuing to work for Family, it will be grounds for immediate termination of this Agreement, unless such action would be prohibited by law.</Text>
            </CollapseBody>
        </Collapse>
        <Text style={styles.text}>OTHER TERMS</Text>
        <Text>This Nanny Agreement is governed by the laws of the State of [STATE] and in the event either Party has a dispute regarding the rights and obligations under this Nanny Agreement, any lawsuit would have to be brought in a court of competent jurisdiction in the County of [COUNTY] in the State of [STATE].

        This Nanny Agreement may be modified from time to time by the Parties in writing, however, any substantial change in scope of duties, schedule, or compensation need not be agreed to by the other Party and may be the basis for termination of this Nanny Agreement without cause.

        Nanny (Employee) agrees to be fully bound by the terms of this Nanny Agreement.</Text>
       
        <Text style={styles.text}>AGREEMENT TERMS</Text>

        <Text>Nanny (Employee) agrees to be fully bound by the terms of this Nanny Agreement.</Text>
        <TextInput style={styles.textInp} placeholder='DocuSign'/>
        <Text>Family (Employer) agrees to be fully bound by the terms of this Nanny Agreement.</Text>

        <TextInput style={styles.textInp} placeholder='DocuSign'/>
        <View style={styles.collapse}>
            <Button style={styles.textButton} title='Submit'/>
        </View>
    
      </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    paddingTop: 30,
    paddingBottom: 30,
  },
  collapse: {
    marginRight:20,
    marginLeft:20,
    marginTop:10,
    marginBottom:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#00bedc',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
  },
  textInp: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 12,
    margin: 12,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    margin: 12,
  }
});
