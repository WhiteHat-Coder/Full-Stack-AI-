window.course = {
    title: 'Full-Stack AI Engineer',
    subtitle: 'Python, machine learning, deep learning, MLOps, and generative AI',
    sections: [
        {
            id: 'section-1-lesson-1',
            section: 'Section 1',
            type: 'Lesson 1 · Introduction',
            title: 'The full-stack AI engineering journey',
            summary: 'An orientation to the 15-week, project-driven path from Python foundations to production-ready AI systems.',
            objectives: [
                'Describe the journey from Python foundations through data science, machine learning, deep learning, MLOps, and generative AI.',
                'Recognize the practical work included in the course: building, training, deploying, monitoring, and scaling AI systems.',
                'Identify the tools and project outcomes introduced in the course roadmap.'
            ],
            concepts: [
                {
                    title: 'The modern AI stack',
                    body: 'The course presents AI engineering as an end-to-end discipline. It begins with Python programming, moves through data work and model development, then covers deployment, automation, monitoring, and generative AI applications.'
                },
                {
                    title: 'A project-driven path',
                    body: 'The tutorial describes a 15-week immersive journey built for practice. Each week includes exercises, real datasets, and hands-on labs so that ideas are applied immediately.'
                },
                {
                    title: 'From idea to production',
                    body: 'The intended outcome is not only understanding AI concepts. Learners are expected to build models and applications, package and deploy them, and understand the lifecycle from data collection through monitoring.'
                }
            ],
            roadmap: [
                { name: 'Python foundations', detail: 'Programming skills, NumPy, and pandas for working with data.' },
                { name: 'Data science and machine learning', detail: 'Cleaning, visualization, regression, classification, ensembles, and evaluation.' },
                { name: 'Deep learning', detail: 'Neural networks with TensorFlow and PyTorch for images, text, and time series.' },
                { name: 'MLOps and cloud deployment', detail: 'Version control, automation, CI/CD, deployment, and model lifecycle practices.' },
                { name: 'Generative AI and LLMs', detail: 'GPT, Claude, Gemini, RAG systems, chatbots, content generators, and AI agents.' }
            ],
            takeaways: [
                'The course aims to develop production-ready AI engineering capability, not only theoretical familiarity.',
                'The program includes more than 15 projects and a custom generative AI application.',
                'The named tools include Python, NumPy, pandas, scikit-learn, TensorFlow, PyTorch, Docker, Git, MLflow, and LangChain.'
            ],
            check: {
                question: 'Which sequence best matches the course journey described in this lesson?',
                answer: 'Python foundations → data science and machine learning → deep learning → MLOps and cloud deployment → generative AI and large language models.'
            },
            resources: [
                { label: '15-week companion handbook', path: './pdf/section1/Lesson1/full-stack-ai-engineer-15-week-companion-handbook.pdf' },
                { label: 'All-lecture cheatsheets', path: './pdf/section1/Lesson1/full-stack-ai-engineer-all-lecture-cheatsheets.pdf' },
                { label: 'Project workbook', path: './pdf/section1/Lesson1/full-stack-ai-engineer-project-workbook.pdf' },
                { label: 'Visual field guide', path: './pdf/section1/Lesson1/full-stack-ai-engineer-visual-field-guide.pdf' }
            ]
        },
        {
            id: 'section-1-lesson-2',
            section: 'Section 1',
            type: 'Lesson 2 · AI foundations',
            title: 'Artificial intelligence: concepts, methods, and applications',
            summary: 'A broad map of artificial intelligence, from machine learning and neural networks to responsible deployment and emerging AI systems.',
            objectives: [
                'Explain the relationship between artificial intelligence, machine learning, deep learning, and generative AI.',
                'Compare supervised, unsupervised, and reinforcement learning.',
                'Recognize the roles of neural network architectures such as CNNs, RNNs, LSTMs, and transformers.',
                'Identify data, training, evaluation, deployment, and fairness concerns in AI development.',
                'Distinguish narrow AI from the theoretical goal of artificial general intelligence.'
            ],
            concepts: [
                {
                    title: 'AI, machine learning, and deep learning',
                    body: 'Artificial intelligence is presented as the broad field of machines performing cognitive tasks such as reasoning, learning, problem solving, and decision making. Machine learning improves performance through experience and finds patterns in data. Deep learning uses multiple neural-network layers to learn abstract features from raw data.'
                },
                {
                    title: 'Three learning paradigms',
                    body: 'Supervised learning uses labeled input-output examples for tasks such as classification, spam detection, and price prediction. Unsupervised learning finds structure in unlabeled data through clustering, anomaly detection, and dimensionality reduction. Reinforcement learning trains an agent through actions, rewards, and penalties to maximize cumulative reward.'
                },
                {
                    title: 'Neural network foundations',
                    body: 'Artificial neurons receive inputs, apply weights, and use activation functions to produce outputs. An input layer receives features, hidden layers transform representations through weighted connections and non-linearity, and an output layer produces a prediction or classification.'
                },
                {
                    title: 'Specialized neural architectures',
                    body: 'Convolutional neural networks identify visual features such as edges and textures. Recurrent neural networks process sequences while retaining information across time steps. Long short-term memory networks use gates to preserve context over long sequences. Transformers use self-attention and parallel sequence processing for scalable language understanding and generation.'
                },
                {
                    title: 'Language, vision, and generation',
                    body: 'Natural language processing extracts meaning, sentiment, and intent, and supports translation and text generation. Computer vision supports object detection, scene understanding, facial analysis, medical diagnosis, quality control, and autonomous navigation. Generative AI learns patterns from large datasets to create text, images, audio, and video.'
                },
                {
                    title: 'Data and features determine results',
                    body: 'High-quality, clean, diverse, balanced training data supports effective learning. Feature engineering analyzes raw data, transforms it into meaningful representations, and selects useful variables. Big data is described through volume, velocity, variety, and veracity.'
                },
                {
                    title: 'Generalization and optimization',
                    body: 'Overfitting occurs when a model memorizes training data and performs poorly on new data; regularization, cross-validation, more data, and simpler architectures are listed as remedies. Underfitting occurs when a model is too simple; adding features, increasing complexity, or training longer can help. Gradient descent updates parameters to reduce loss, while backpropagation sends prediction error backward to adjust weights.'
                },
                {
                    title: 'Reusing and combining models',
                    body: 'Transfer learning reuses knowledge from a pretrained model to reduce training time and data requirements. Fine-tuning adapts a pretrained model by preserving general features and training later layers for a specific domain. Ensemble methods combine multiple model predictions to improve robustness; random forests combine decision trees using bootstrap samples and majority voting.'
                },
                {
                    title: 'Classical machine learning methods',
                    body: 'Support vector machines seek a maximum-margin separating hyperplane and can use the kernel trick for nonlinear relationships. K-means repeatedly assigns points to the nearest centroid and updates centroids. Principal component analysis transforms high-dimensional data into lower-dimensional representations while preserving as much variance as possible.'
                },
                {
                    title: 'AI systems in the world',
                    body: 'Expert systems combine a domain knowledge base with an inference engine and user interface. Fuzzy logic represents degrees of truth between zero and one. Genetic algorithms evolve candidate solutions through selection, crossover, and mutation. Swarm intelligence uses local rules and emergent behavior, including ant colony, particle swarm, and bee-inspired methods.'
                },
                {
                    title: 'Deployment and responsible AI',
                    body: 'Robotics combines sensors, AI planning, and actuation. Edge computing processes data locally for fast responses, lower bandwidth use, and privacy. Cloud AI provides scalable computation, GPU-based training, API deployment, and shared resources. Explainable AI techniques such as LIME, SHAP, and attention visualization help interpret model decisions. Federated learning shares model updates instead of raw device data. AI ethics requires attention to fairness, privacy, accountability, transparency, and human values.'
                }
            ],
            roadmap: [
                { name: 'Understand the field', detail: 'Start with AI as the broad discipline, then place machine learning, deep learning, and generative AI within it.' },
                { name: 'Choose a learning setup', detail: 'Use labels for supervised learning, discover structure without labels, or learn through rewards and interaction.' },
                { name: 'Represent and learn', detail: 'Prepare data and features, choose an architecture or algorithm, then optimize its parameters.' },
                { name: 'Evaluate generalization', detail: 'Use held-out data and cross-validation while watching for overfitting, underfitting, bias, and data quality problems.' },
                { name: 'Deploy responsibly', detail: 'Select edge or cloud execution, interpret decisions where needed, protect data, and consider fairness and accountability.' }
            ],
            takeaways: [
                'Machine learning forms the backbone of modern AI, while deep learning uses multiple layers to learn complex patterns.',
                'Attention helps language models prioritize relevant input elements for translation, summarization, and question answering.',
                'Narrow AI is effective at specialized tasks, while artificial general intelligence remains a theoretical goal for human-level capability across domains.',
                'Important emerging directions include multimodal AI, neuromorphic computing, quantum machine learning, and human-AI collaboration.'
            ],
            clarification: 'This is an introductory survey. Each topic will receive deeper lessons later, while this overview provides the vocabulary and map needed to place those lessons in context.',
            check: {
                question: 'A model is trained with labeled examples of housing features and prices. Which learning paradigm is being used?',
                answer: 'Supervised learning, because the training examples pair inputs with known target outputs.'
            },
            resourceIntro: 'Resources for this lecture include project materials and slides covering the course weeks.',
            resources: [
                { label: 'Course slides and project resources', path: './pdf/section1/Lesson2/Full-Stack+AI+Engineer.pdf' },
                { label: 'Code files', path: './pdf/section1/Lesson2/Code_files.zip' }
            ]
        },
        {
            id: 'section-2-lesson-1',
            section: 'Section 2',
            type: 'Lesson 1 · Python programming basics',
            title: 'Your first week with Python',
            summary: 'A seven-day introduction to Python, from development setup and control flow to data structures, file handling, and a practical project.',
            objectives: [
                'Describe the topics covered during the first week of Python programming.',
                'Recognize how control flow, functions, modules, data structures, strings, and file handling fit together.',
                'Identify the role of Pythonic code and project work in consolidating the week’s learning.'
            ],
            concepts: [
                {
                    title: 'A foundation week',
                    body: 'The first week builds a practical Python foundation in a deliberate sequence: begin with the language and development setup, then move through the core techniques used to write useful programs.'
                },
                {
                    title: 'Core programming building blocks',
                    body: 'The week introduces control flow, functions, modules, lists, tuples, dictionaries, sets, and strings. Together, these topics provide the tools for expressing logic, organizing code, and working with common kinds of data.'
                },
                {
                    title: 'Working with real program input',
                    body: 'File handling extends Python programs beyond the immediate runtime by allowing them to read and write data. Pythonic code and project work then bring the week’s ideas together in a practical context.'
                }
            ],
            roadmap: [
                { name: 'Day 1', detail: 'Introduction to Python and development setup.' },
                { name: 'Day 2', detail: 'Control flow in Python.' },
                { name: 'Day 3', detail: 'Functions and modules.' },
                { name: 'Day 4', detail: 'Data structures: lists, tuples, dictionaries, and sets.' },
                { name: 'Day 5', detail: 'Working with strings.' },
                { name: 'Day 6', detail: 'File handling.' },
                { name: 'Day 7', detail: 'Pythonic code and project work.' }
            ],
            takeaways: [
                'The first week moves from setup and language fundamentals toward practical programming work.',
                'Python’s core data structures and string operations prepare you to represent and transform information.',
                'The week ends by applying the techniques together through Pythonic code and a project.'
            ],
            check: {
                question: 'Which topic sequence best matches the first week of Python programming?',
                answer: 'Introduction and setup → control flow → functions and modules → data structures → strings → file handling → Pythonic code and project work.'
            }
        },
        {
            id: 'section-2-lesson-2',
            section: 'Section 2',
            type: 'Lesson 2 · Day 1',
            title: 'Python, development setup, and your first exercises',
            summary: 'Understand why Python is widely used in AI, prepare a coding environment, and practice basic syntax, variables, and data types through two small scripts.',
            objectives: [
                'Explain why Python is a practical language for AI, machine learning, data work, and automation.',
                'Set up Python, Jupyter Notebook, Visual Studio Code, the Python extension, and a selected interpreter.',
                'Use comments, indentation, variables, and common Python data types in simple programs.',
                'Create and run scripts that print messages and manipulate values of different data types.'
            ],
            concepts: [
                {
                    title: 'Why Python for AI',
                    body: 'Python combines readable syntax with a broad ecosystem and an active community. NumPy and pandas support numerical and tabular data work; scikit-learn supports machine learning; TensorFlow and PyTorch support deep learning; Matplotlib supports visualization; and NLTK, spaCy, and Transformers support natural language processing. Python is also well suited to automation and scripting.'
                },
                {
                    title: 'A practical coding environment',
                    body: 'The setup uses Python from python.org, Jupyter Notebook for interactive coding and data exploration, and Visual Studio Code for editing and running scripts. Install the Python extension in VS Code and select the installed Python interpreter so that scripts execute with the intended environment. Run the same small test in each tool to confirm that they are using the interpreter you expect.',
                    example: {
                        language: 'Python',
                        code: 'print("Hello, AI world!")',
                        result: 'Hello, AI world!',
                        usage: 'A quick installation and interpreter check.'
                    }
                },
                {
                    title: 'Python syntax and variables',
                    body: 'Single-line comments begin with #, while triple-quoted strings can span multiple lines. Indentation defines code blocks instead of braces. Variables are created by assigning values and do not require an explicit type declaration because Python is dynamically typed. A variable can later refer to a value of another type, although clear naming makes programs easier to understand.',
                    example: {
                        language: 'Python',
                        code: 'name = "Alice"\nage = 25\nprint(f"{name} is {age} years old")',
                        result: 'Alice is 25 years old',
                        usage: 'Store values once and reuse them in messages, calculations, or model inputs.'
                    }
                },
                {
                    title: 'Common data types',
                    body: 'Integers represent whole numbers, floats represent decimal numbers, and strings represent text inside quotes. Lists are ordered and mutable collections, tuples are ordered and immutable collections, dictionaries store key-value pairs, and booleans represent True or False values used in logical operations. Choose a type based on whether the data needs ordering, mutation, named lookup, or a yes/no state.',
                    example: {
                        language: 'Python',
                        code: 'scores = [80, 92]\ncoordinates = (10, 20)\nperson = {"name": "Alice", "role": "engineer"}\nis_student = True\n\nscores.append(95)\nprint(scores)\nprint(person["name"])',
                        result: '[80, 92, 95] followed by Alice',
                        usage: 'Represent batches of values, fixed coordinates, named records, and logical conditions.'
                    }
                },
                {
                    title: 'Two first exercises',
                    body: 'The first exercise creates a Python script that prints a message such as Hello, AI world. The second defines an integer, float, string, list, tuple, dictionary, and boolean, then practices string concatenation, appending an item to a list, and accessing a dictionary value by key. Start with the smallest working script, run it, and change one value at a time so you can connect each edit to its output.',
                    example: {
                        language: 'Python',
                        code: 'string_variable = "AI"\nlist_variable = [1, 2, 3]\ndictionary_variable = {"name": "Alice", "role": "engineer"}\n\nlist_variable.append(4)\nprint(string_variable + " bootcamp")\nprint(list_variable)\nprint(dictionary_variable["role"])',
                        result: 'AI bootcamp, [1, 2, 3, 4], and engineer',
                        usage: 'Practice mutation, concatenation, and key-based lookup before moving to larger programs.'
                    }
                }
            ],
            roadmap: [
                { name: 'Orient', detail: 'Place Python in the AI workflow and identify the libraries used for data, machine learning, deep learning, visualization, and language tasks.' },
                { name: 'Install Python', detail: 'Download Python from python.org and confirm the installation by opening the Python prompt and printing a message.' },
                { name: 'Prepare the tools', detail: 'Install Jupyter with pip install Jupyter, launch it with jupyter notebook, and configure the Python extension and interpreter in Visual Studio Code.' },
                { name: 'Learn the essentials', detail: 'Practice comments, indentation, variables, integers, floats, strings, lists, tuples, dictionaries, and booleans.' },
                { name: 'Build and run', detail: 'Write a message-printing script, then create a second script that prints and manipulates values of several data types.' }
            ],
            takeaways: [
                'Python’s readability, libraries, and community make it a strong general-purpose language for AI development.',
                'Jupyter is useful for interactive exploration, while Visual Studio Code supports script editing, autocomplete, syntax highlighting, and debugging.',
                'Python variables are assigned values directly, and indentation determines the structure of code blocks.',
                'The first exercises connect data-type definitions to operations such as concatenating strings, appending to lists, and reading dictionary values.'
            ],
            clarification: 'Installation screens, available Python versions, and the exact command used to start Python can vary by operating system. Use the current official Python installer, confirm that the interpreter is available in your terminal, and select that same interpreter in your editor.',
            check: {
                question: 'Which statement correctly matches the Python data types introduced in this lesson?',
                answer: 'A list is ordered and mutable, a tuple is ordered and immutable, a dictionary stores key-value pairs, and a boolean is either True or False.'
            }
        }
    ]
};

// Add future lessons as structured data and keep explanations accurate and learner-focused.
