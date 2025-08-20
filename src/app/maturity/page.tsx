"use client";
import Navbar from "@/components/Navbar";
import SolutionsSidebar from "../../components/SolutionsSidebar";
import MitreTechniquesSelector from "../../components/MitreTechniquesSelector";
import MaturityChart from "../../components/MaturityChart";
import { useState } from "react";

export default function MaturityPage() {
  const [selectedTechniques, setSelectedTechniques] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Service to techniques mapping
  const serviceTechniqueMap: Record<string, string[]> = {
    "Managed Detection & Response": [
      "Active Scanning",
      "Content Injection",
      "Hardware Additions",
    ],
    "Threat Intelligence": [
      "Phishing",
      "Search Open Websites/Domains",
      "Disk Wipe",
    ],
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) => {
      const isSelected = prev.includes(service);
  const nextServices = isSelected ? prev.filter((s) => s !== service) : [...prev, service];

      // Handle technique toggling for services with mapped techniques
      if (serviceTechniqueMap[service]) {
        setSelectedTechniques((prevTechs) => {
          const mappedTechs = serviceTechniqueMap[service];
          if (isSelected) {
            // Remove mapped techniques
            return prevTechs.filter((t) => !mappedTechs.includes(t));
          } else {
            // Add mapped techniques
            return Array.from(new Set([...prevTechs, ...mappedTechs]));
          }
        });
      }
      return nextServices;
    });
  };

  // Import the techniques array from MitreTechniquesSelector
  const mitreTechniques = [
    // ...existing categories and techniques (copy from MitreTechniquesSelector)...
    { category: "Reconnaissance", techniques: ["Active Scanning", "Gather Victim Host Information", "Gather Victim Identity Information", "Gather Victim Network Information", "Gather Victim Org Information", "Phishing for Information", "Search Closed Sources", "Search Open Technical Databases", "Search Open Websites/Domains", "Search Victim-Owned Websites"] },
    { category: "Resource Development", techniques: ["Acquire Access", "Acquire Infrastructure", "Compromise Accounts", "Compromise Infrastructure", "Develop Capabilities", "Establish Accounts", "Obtain Capabilities", "Stage Capabilities"] },
    { category: "Initial Access", techniques: ["Drive-by Compromise", "Exploit Public-Facing Application", "External Remote Services", "Hardware Additions", "Phishing", "Replication Through Removable Media", "Supply Chain Compromise", "Trusted Relationship", "Valid Accounts", "Content Injection", "WiFi Networks"] },
    { category: "Execution", techniques: ["Cloud Administration Command", "Command and Scripting Interpreter", "Container Administration Command", "Deploy Container", "ESXi Administration Command", "Exploitation for Client Execution", "Input Injection", "Inter-Process Communication", "Native API", "Scheduled Task/Job", "Serverless Execution", "User Execution", "Windows Management Instrumentation", "Software Deployment Tools", "System Services", "Service Execution", "Service Extensions", "New Modules"] },
    { category: "Persistence", techniques: ["Account Manipulation", "BITS Jobs", "Boot or Logon Autostart Execution", "Boot or Logon Initialization Scripts", "Create Account", "Create or Modify System Process", "Event Triggered Execution", "External Remote Services", "Hijack Execution Flow", "Implant Authentication Process", "Software Extensions", "Traffic Signaling", "Valid Accounts"] },
    { category: "Privilege Escalation", techniques: ["Abuse Elevation Control Mechanism", "Access Token Manipulation", "Account Manipulation", "Boot or Logon Autostart Execution", "Boot or Logon Initialization Scripts", "Create or Modify System Process", "Event Triggered Execution", "Hijack Execution Flow", "Implant Authentication Process", "Modify Authentication Process", "Scheduled Task/Job", "Valid Accounts", "Process Injection", "Set User Privileges"] },
    { category: "Defense Evasion", techniques: ["Abuse Elevation Control Mechanism", "Access Token Manipulation", "BITS Jobs", "Boot or Logon Autostart Execution", "Boot or Logon Initialization Scripts", "Clear Windows Event Logs", "Cloud Service Dashboard", "Deobfuscate/Decode Files or Information", "Deploy Container", "Disable Cloud Logs", "Disable or Modify Tools", "Disable Security Tools", "Domain Fronting", "File and Directory Permissions Modification", "File Deletion", "Hide Artifacts", "Impair Defenses", "Indicator Removal", "Indirect Command Execution", "Masquerading", "Modify Authentication Process", "Modify Cloud Compute Infrastructure", "Modify Cloud Resource Hierarchy", "Modify Registry", "Modify System Image", "Network Boundary Bridging", "Obfuscated Files or Information", "Pre-OS Boot", "Process Injection", "Reflective Code Loading", "Rogue Domain Controller", "Rootkit", "Subvert Trust Controls", "System Binary Proxy Execution", "System Script Proxy Execution", "Template Injection", "Traffic Signaling", "Trusted Developer Utilities Proxy Execution", "Unsecured Credentials", "Use Alternate Authentication Material", "Valid Accounts", "Virtualization/Sandbox Evasion", "Weak Encryption", "XSL Script Processing"] },
    { category: "Credential Access", techniques: ["Adversary-in-the-Middle", "Credentials from Password Stores", "Credentials from Web Browsers", "Forge Web Credentials", "Input Capture", "Multi-Factor Authentication Interception", "Multi-Factor Authentication Request Generation", "Network Sniffing", "OS Credential Dumping", "Steal Application Access Token", "Steal or Forge Authentication Certificates", "Steal or Forge Kerberos Tickets", "Steal Web Session Cookie", "Unsecured Credentials"] },
    { category: "Discovery", techniques: ["Account Discovery", "Browser Information Discovery", "Cloud Infrastructure Discovery", "Cloud Service Dashboard", "Cloud Storage Object Discovery", "Container and Resource Discovery", "Debugger Discovery", "Domain Trust Discovery", "File and Directory Discovery", "Group Policy Discovery", "Log Enumeration", "Network Service Discovery", "Network Share Discovery", "Network Sniffing", "Password Policy Discovery", "Peripheral Device Discovery", "Permission Groups Discovery", "Process Discovery", "Query Registry", "Remote System Discovery", "Software Discovery", "System Information Discovery", "System Location Discovery", "System Network Connections Discovery", "System Network Configuration Discovery", "System Owner/User Discovery", "System Service Discovery", "System Time Discovery", "System User Discovery", "System Machine Discovery", "Virtualization/Sandbox Evasion"] },
    { category: "Lateral Movement", techniques: ["Exploitation of Remote Services", "Internal Spearphishing", "Remote Service Session Hijacking", "Replication Through Removable Media", "Shared Admin Account", "Transfer Shared Content", "Use Alternate Authentication Material"] },
    { category: "Collection", techniques: ["Adversary-in-the-Middle", "Archive Collected Data", "Audio Capture", "Automated Collection", "Browser Session Hijacking", "Clipboard Data", "Data from Cloud Storage", "Data from Configuration Repository", "Data from Information Repositories", "Data from Local System", "Data from Network Shared Drive", "Data Staged", "Email Collection", "Input Capture", "Screen Capture", "Video Capture"] },
    { category: "Command and Control", techniques: ["Application Layer Protocol", "Communication Through Removable Media", "Data Encoding", "Data Obfuscation", "Dynamic Resolution", "Encrypted Channel", "Fallback Channels", "Hide Infrastructure", "Ingress Tool Transfer", "Multi-Stage Channels", "Non-Application Layer Protocol", "Protocol Tunneling", "Remote Access Tools", "Traffic Signaling", "Web Service"] },
    { category: "Exfiltration", techniques: ["Automated Exfiltration", "Data Transfer Size Limits", "Exfiltration Over Alternative Protocol", "Exfiltration Over C2 Channel", "Exfiltration Over Other Network Medium", "Exfiltration Over Physical Medium", "Exfiltration Over Web Service", "Scheduled Transfer", "Transfer Data to Cloud Account"] },
    { category: "Impact", techniques: ["Account Access Removal", "Data Encrypted for Impact", "Data Manipulation", "Defacement", "Disk Wipe", "Email Bombing", "Endpoint Denial of Service", "Firmware Corruption", "Network Denial of Service", "Resource Hijacking", "Service Stop", "System Shutdown/Reboot"] },
  ];

  const allTechniques = mitreTechniques.flatMap((cat) => cat.techniques);
  const totalTechniques = allTechniques.length;

  // Compute locked techniques: all techniques mapped to selected services
  const lockedTechniques = selectedServices.flatMap((service) => serviceTechniqueMap[service] || []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-1">
        <aside className="w-1/4 p-6 border-r bg-gray-50">
          <SolutionsSidebar
            selected={selectedServices}
            onToggle={handleServiceToggle}
          />
        </aside>
        <section className="flex-1 p-6 flex flex-col gap-8">
          <div>
            <MitreTechniquesSelector
              selected={selectedTechniques}
              setSelected={setSelectedTechniques}
              mitreTechniques={mitreTechniques}
              lockedTechniques={lockedTechniques}
            />
          </div>
          <div className="flex-1">
            <MaturityChart toggledCount={selectedTechniques.length} totalTechniques={totalTechniques} />
          </div>
        </section>
      </main>
    </div>
  );
}
