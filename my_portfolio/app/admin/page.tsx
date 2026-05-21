"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Plus, Trash2, Save, Lock, FolderPlus, Award } from "lucide-react";
import axios from "axios";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"projects" | "certifications">("projects");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Project Form State
  const [projectForm, setProjectForm] = useState({
    slug: "",
    title: "",
    shortTitle: "",
    skills: [] as string[],
    tech: [] as string[],
    date: "",
    role: "",
    domain: "",
    status: "",
    description: [] as string[],
    howIDidIt: "",
  });

  // Certification Form State
  const [certForm, setCertForm] = useState({
    title: "",
    issuer: "",
    date: "",
    link: "",
    skills: [] as string[],
  });

  const [tempSkill, setTempSkill] = useState("");
  const [tempTech, setTempTech] = useState("");
  const [tempDesc, setTempDesc] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await axios.post("/api/admin/login", { password });
      if (res.data.success) {
        setIsAuthenticated(true);
      }
    } catch (error: any) {
      setMessage({ type: "error", text: "Invalid password. Please check your Vercel Environment Variables." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await axios.post("/api/admin/update", {
        password,
        type: "project",
        data: projectForm,
      });
      setMessage({ type: "success", text: "Project added successfully! Site will rebuild in 1-2 mins." });
      setProjectForm({
        slug: "", title: "", shortTitle: "", skills: [], tech: [], date: "", role: "", domain: "", status: "", description: [], howIDidIt: ""
      });
    } catch (error: any) {
      setMessage({ type: "error", text: error.response?.data?.error || "Failed to add project." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCert = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await axios.post("/api/admin/update", {
        password,
        type: "certification",
        data: certForm,
      });
      setMessage({ type: "success", text: "Certification added successfully! Site will rebuild in 1-2 mins." });
      setCertForm({ title: "", issuer: "", date: "", link: "", skills: [] });
    } catch (error: any) {
      setMessage({ type: "error", text: error.response?.data?.error || "Failed to add certification." });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <Card className="w-full max-w-md border-border">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Lock className="text-primary" size={24} />
            </div>
            <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Enter Admin Password"
                className="w-full px-4 py-2 rounded-lg border border-border bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Enter Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Portfolio Dashboard</h1>
            <p className="text-muted-foreground">Manage your projects and certifications.</p>
          </div>
          <div className="flex bg-muted p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${activeTab === "projects" ? "bg-background shadow-sm" : "hover:bg-background/50"}`}
            >
              <FolderPlus size={18} /> Projects
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${activeTab === "certifications" ? "bg-background shadow-sm" : "hover:bg-background/50"}`}
            >
              <Award size={18} /> Certifications
            </button>
          </div>
        </header>

        {message.text && (
          <div className={`p-4 rounded-lg mb-8 border ${message.type === "success" ? "bg-green-500/10 border-green-500/50 text-green-500" : "bg-red-500/10 border-red-500/50 text-red-500"}`}>
            {message.text}
          </div>
        )}

        {activeTab === "projects" ? (
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Add New Project</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddProject} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-muted"
                      value={projectForm.title}
                      onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Slug (URL Name)</label>
                    <input
                      type="text"
                      placeholder="e.g. my-awesome-project"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-muted"
                      value={projectForm.slug}
                      onChange={(e) => setProjectForm({ ...projectForm, slug: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Short Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-muted"
                      value={projectForm.shortTitle}
                      onChange={(e) => setProjectForm({ ...projectForm, shortTitle: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date Range</label>
                    <input
                      type="text"
                      placeholder="e.g. Jan 2024 - Present"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-muted"
                      value={projectForm.date}
                      onChange={(e) => setProjectForm({ ...projectForm, date: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Role</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-muted"
                      value={projectForm.role}
                      onChange={(e) => setProjectForm({ ...projectForm, role: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Domain</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-muted"
                      value={projectForm.domain}
                      onChange={(e) => setProjectForm({ ...projectForm, domain: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Status (Optional)</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-muted"
                      value={projectForm.status}
                      onChange={(e) => setProjectForm({ ...projectForm, status: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Skills (Used in Cards)</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-grow px-4 py-2 rounded-lg border border-border bg-muted"
                      value={tempSkill}
                      onChange={(e) => setTempSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), setProjectForm({...projectForm, skills: [...projectForm.skills, tempSkill]}), setTempSkill(""))}
                    />
                    <Button type="button" onClick={() => { setProjectForm({ ...projectForm, skills: [...projectForm.skills, tempSkill] }); setTempSkill(""); }}>
                      <Plus size={18} />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {projectForm.skills.map((s, i) => (
                      <Badge key={i} className="flex items-center gap-1">
                        {s} <Trash2 size={12} className="cursor-pointer" onClick={() => setProjectForm({ ...projectForm, skills: projectForm.skills.filter((_, idx) => idx !== i) })} />
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Tech Stack (Full List)</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-grow px-4 py-2 rounded-lg border border-border bg-muted"
                      value={tempTech}
                      onChange={(e) => setTempTech(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), setProjectForm({...projectForm, tech: [...projectForm.tech, tempTech]}), setTempTech(""))}
                    />
                    <Button type="button" onClick={() => { setProjectForm({ ...projectForm, tech: [...projectForm.tech, tempTech] }); setTempTech(""); }}>
                      <Plus size={18} />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {projectForm.tech.map((t, i) => (
                      <Badge key={i} variant="secondary" className="flex items-center gap-1">
                        {t} <Trash2 size={12} className="cursor-pointer" onClick={() => setProjectForm({ ...projectForm, tech: projectForm.tech.filter((_, idx) => idx !== i) })} />
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Description Paragraphs</label>
                  <div className="flex gap-2">
                    <textarea
                      className="flex-grow px-4 py-2 rounded-lg border border-border bg-muted min-h-[100px]"
                      value={tempDesc}
                      onChange={(e) => setTempDesc(e.target.value)}
                    />
                    <Button type="button" onClick={() => { setProjectForm({ ...projectForm, description: [...projectForm.description, tempDesc] }); setTempDesc(""); }}>
                      <Plus size={18} />
                    </Button>
                  </div>
                  <div className="space-y-2 mt-2">
                    {projectForm.description.map((d, i) => (
                      <div key={i} className="flex justify-between items-start gap-4 p-3 bg-muted rounded-lg border border-border">
                        <p className="text-sm text-muted-foreground">{d}</p>
                        <Trash2 size={16} className="text-red-500 cursor-pointer flex-shrink-0" onClick={() => setProjectForm({ ...projectForm, description: projectForm.description.filter((_, idx) => idx !== i) })} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">How I Did It</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-border bg-muted min-h-[100px]"
                    value={projectForm.howIDidIt}
                    onChange={(e) => setProjectForm({ ...projectForm, howIDidIt: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full h-12 gap-2" disabled={isLoading}>
                  {isLoading ? "Saving..." : <><Save size={18} /> Save Project to GitHub</>}
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Add New Certification</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddCert} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-muted"
                    value={certForm.title}
                    onChange={(e) => setCertForm({ ...certForm, title: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Issuer</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-muted"
                      value={certForm.issuer}
                      onChange={(e) => setCertForm({ ...certForm, issuer: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Year</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-muted"
                      value={certForm.date}
                      onChange={(e) => setCertForm({ ...certForm, date: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Certificate Link (Optional)</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    className="w-full px-4 py-2 rounded-lg border border-border bg-muted"
                    value={certForm.link}
                    onChange={(e) => setCertForm({ ...certForm, link: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Skills</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-grow px-4 py-2 rounded-lg border border-border bg-muted"
                      value={tempSkill}
                      onChange={(e) => setTempSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), setCertForm({...certForm, skills: [...certForm.skills, tempSkill]}), setTempSkill(""))}
                    />
                    <Button type="button" onClick={() => { setCertForm({ ...certForm, skills: [...certForm.skills, tempSkill] }); setTempSkill(""); }}>
                      <Plus size={18} />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {certForm.skills.map((s, i) => (
                      <Badge key={i} className="flex items-center gap-1">
                        {s} <Trash2 size={12} className="cursor-pointer" onClick={() => setCertForm({ ...certForm, skills: certForm.skills.filter((_, idx) => idx !== i) })} />
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 gap-2" disabled={isLoading}>
                  {isLoading ? "Saving..." : <><Save size={18} /> Save Certification to GitHub</>}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
